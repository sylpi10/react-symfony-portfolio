<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Attribute\Route;

class ContactController extends AbstractController
{
    public function __construct(
        protected MailerInterface $mailer,
        protected EntityManagerInterface $em
    ) {}

    #[Route('/api/contact', name: 'app_contact', methods: ['POST'])]
    public function contact(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return $this->json([
                'success' => false,
                'message' => 'Données JSON invalides.'
            ], Response::HTTP_BAD_REQUEST);
        }

        // Anti-spam : champ invisible rempli = robot
        if (!empty($data['website'])) {
            return $this->json([
                'success' => true,
                'message' => 'Formulaire ignoré (anti-spam)',
            ]);
        }

        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->submit($data);

        // Vérifie la soumission
        if (!$form->isSubmitted()) {
            return $this->json([
                'success' => false,
                'message' => 'Formulaire non soumis.',
            ], Response::HTTP_BAD_REQUEST);
        }

        // Si valide : on envoie le mail et on persiste
        if ($form->isValid()) {
            try {
                $mail = (new TemplatedEmail())
                    ->to('syl.pillet@hotmail.fr')
                    ->from($contact->getEmail())
                    ->subject('Contact depuis le portfolio')
                    ->text($contact->getMessage());

                $this->mailer->send($mail);

                $contact->setDate(new \DateTimeImmutable());
                $this->em->persist($contact);
                $this->em->flush();

                return $this->json([
                    'success' => true,
                    'message' => 'Email envoyé avec succès.'
                ]);
            } catch (TransportExceptionInterface $e) {
                return $this->json([
                    'success' => false,
                    'message' => 'Échec de l\'envoi de l\'email.',
                    'error' => $e->getMessage(),
                ], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        }

        // Sinon : formulaire invalide, on renvoie les erreurs
        $errors = [];
        foreach ($form->getErrors(true) as $error) {
            $errors[] = [
                'field' => $error->getOrigin()?->getName(),
                'message' => $error->getMessage(),
            ];
        }

        return $this->json([
            'success' => false,
            'message' => 'Validation échouée',
            'errors' => $errors,
        ], Response::HTTP_BAD_REQUEST);
    }
}
