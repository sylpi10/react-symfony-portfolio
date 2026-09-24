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
            // Fetch all projects from the database
            $projects = $this->projectRepository->findAll();

            // Format data for JSON response
            $data = [];
            foreach ($projects as $project) {
                $data[] = [
                    "id" => $project->getId(),
                    "name" => $project->getName(),
                    "description" => $project->getDescription(),
                    "technos" => $project->getTechnos(),
                    "date" => $project->getDate(),
                    "weblink" => $project->getWeblink(),
                    "githublink" => $project->getGithublink(),
                    "background" => $project->getBackground(),
                ];
            }
            return $this->inertia->render("Home", ["projects" => $data]);
        } catch (\Throwable $e) {
            // LOG explicitement l'erreur
            error_log("[API PROJECTS ERROR] " . $e->getMessage());
            return $this->inertia->render("Error", [
                "message" => $e->getMessage(),
            ]);
        }
    }

    #[
        Route(
            "/api/projects/{id}",
            name: "api_projects_details",
            methods: ["GET"],
        ),
    ]
    public function getProjectDetails(
        #[MapEntity(id: "id")] Project $project,
    ): Response {
        // Format data for JSON response
        // $data = [
        //     "id" => $project->getId(),
        //     "name" => $project->getName(),
        //     "description" => $project->getDescription(),
        //     "technos" => $project->getTechnos(),
        //     "date" => $project->getDate(),
        //     "weblink" => $project->getWeblink(),
        //     "githublink" => $project->getGithublink(),
        //     "background" => $project->getBackground(),
        //     "detailPic" => $project->getDetailPic(),
        //     "detailPicMobile" => $project->getDetailPicMobile(),
        // ];

        return $this->inertia->render("ProjectDetails", [
            "project" => $project,
        ]);
    }
}
