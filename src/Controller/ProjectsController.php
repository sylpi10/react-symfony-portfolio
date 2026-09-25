<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Response;
use Nytodev\InertiaBundle\Service\Inertia;

use function Symfony\Component\String\u;

class ProjectsController extends AbstractController
{
    private const string HOME_TITLE = "Sylvain Pillet – Développeur Frontend / fullstack freelance à Toulouse";
    private const string HOME_DESCRIPTION = "Développeur web freelance à Toulouse, spécialisé React & Symfony. Sites et applications rapides, accessibles et optimisés SEO, partout en France.";
    private const array ERROR_SEO = [
        "title" => "Page introuvable | Sylvain Pillet",
        "description" => self::HOME_DESCRIPTION,
        "robots" => "noindex, follow",
    ];

    public function __construct(
        protected ProjectRepository $projectRepository,
        private readonly Inertia $inertia,
    ) {}

    #[Route("/", name: "home", methods: ["GET"])]
    public function getProjects(): Response
    {
        try {
            $projects = $this->projectRepository->findAll();
            return $this->inertia->render(
                "Home",
                [
                    "projects" => $projects,
                    "seo" => [
                        "title" => self::HOME_TITLE,
                        "description" => self::HOME_DESCRIPTION,
                    ],
                ],
                ["groups" => ["project:list"]],
            );
        } catch (\Throwable $e) {
            error_log("[API PROJECTS ERROR] " . $e->getMessage());
            return $this->inertia->render("Error", [
                "message" => "La page n'existe pas",
                "seo" => self::ERROR_SEO,
            ]);
        }
    }

    #[Route("/project/{id}", name: "projects_details", methods: ["GET"])]
    public function getProjectDetails(
        #[MapEntity(id: "id")] Project $project,
    ): Response {
        try {
            return $this->inertia->render(
                "ProjectDetails",
                [
                    "project" => $project,
                    "seo" => [
                        "title" =>
                            $project->getName() .
                            " – Projet web | Sylvain Pillet",
                        "description" => $this->projectDescription($project),
                    ],
                ],
                ["groups" => ["project:detail"]],
            );
        } catch (\Throwable $e) {
            error_log("[API PROJECTS ERROR] " . $e->getMessage());
            return $this->inertia->render("Error", [
                "message" => "La page n'existe pas",
                "seo" => self::ERROR_SEO,
            ]);
        }
    }

    // description en HTML en base : texte brut, coupé pour la meta description
    private function projectDescription(Project $project): string
    {
        $text = html_entity_decode(
            strip_tags((string) $project->getDescription()),
        );
        if ("" === trim($text)) {
            $text = sprintf(
                "Projet %s réalisé par Sylvain Pillet, développeur web freelance à Toulouse : %s.",
                $project->getName(),
                $project->getTechnos(),
            );
        }

        return u($text)
            ->collapseWhitespace()
            ->truncate(155, "…", false)
            ->toString();
    }
}
