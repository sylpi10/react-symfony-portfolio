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

class ProjectsController extends AbstractController
{
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
                ["projects" => $projects],
                ["groups" => ["project:list"]],
            );
        } catch (\Throwable $e) {
            error_log("[API PROJECTS ERROR] " . $e->getMessage());
            return $this->inertia->render("Error", [
                "message" => "La page n'existe pas",
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
                ["project" => $project],
                ["groups" => ["project:detail"]],
            );
        } catch (\Throwable $e) {
            error_log("[API PROJECTS ERROR] " . $e->getMessage());
            return $this->inertia->render("Error", [
                "message" => "La page n'existe pas",
            ]);
        }
    }
}
