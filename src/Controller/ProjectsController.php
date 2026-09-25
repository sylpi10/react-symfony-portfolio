<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use App\Service\ProjectMetaDescription;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Response;
use Nytodev\InertiaBundle\Service\Inertia;

class ProjectsController extends AbstractController
{
    private const string HOME_TITLE = "Sylvain Pillet – Développeur Frontend / fullstack freelance à Toulouse";
    private const string HOME_DESCRIPTION = "Développeur web freelance basé à Toulouse, 5 ans d’expérience en e-commerce. Frontend, UI/UX et interfaces modernes, sans négliger le backend.";
    private const array ERROR_SEO = [
        "title" => "Page introuvable | Sylvain Pillet",
        "description" => self::HOME_DESCRIPTION,
        "robots" => "noindex, follow",
    ];

    public function __construct(
        protected ProjectRepository $projectRepository,
        private readonly Inertia $inertia,
        private readonly ProjectMetaDescription $metaDescription,
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
            $adjacent = $this->projectRepository->findAdjacent($project);

            return $this->inertia->render(
                "ProjectDetails",
                [
                    "project" => $project,
                    "previous" => $this->projectLink($adjacent["previous"]),
                    "next" => $this->projectLink($adjacent["next"]),
                    "seo" => [
                        "title" =>
                            $project->getName() .
                            " – Projet web | Sylvain Pillet",
                        "description" => $this->metaDescription->forProject(
                            $project,
                        ),
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

    /**
     * @return array{id: int, name: string, background: ?string}|null
     */
    private function projectLink(?Project $project): ?array
    {
        return $project
            ? [
                "id" => $project->getId(),
                "name" => $project->getName(),
                "background" => $project->getBackground(),
            ]
            : null;
    }
}
