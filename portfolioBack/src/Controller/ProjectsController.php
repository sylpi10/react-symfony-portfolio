<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ProjectsController extends AbstractController
{

    public function __construct(protected ProjectRepository $projectRepository)
    {
    }

    #[Route('/api/projects', name: 'api_projects', methods: ['GET'])]
    public function getProjects(): JsonResponse
    {
        try {
            // Fetch all projects from the database
            $projects = $this->projectRepository->findAll();

            // Format data for JSON response
            $data = [];
            foreach ($projects as $project) {
                $data[] = [
                    'id' => $project->getId(),
                    'name' => $project->getName(),
                    'description' => $project->getDescription(),
                    'technos' => $project->getTechnos(),
                    'date' => $project->getDate(),
                    'weblink' => $project->getWeblink(),
                    'githublink' => $project->getGithublink(),
                    'background' => $project->getBackground(),

                ];
            }
            return new JsonResponse($data);

        } catch (\Throwable $e) {
            // LOG explicitement l'erreur
            error_log('[API PROJECTS ERROR] ' . $e->getMessage());
            return new JsonResponse(['error' => 'Internal Server Error'], 500);
        }
    }


    #[Route('/api/projects/{id}', name: 'api_projects_details', methods: ['GET'])]
    public function getProjectDetails(#[MapEntity(id: 'id')] Project $project): JsonResponse
    {

        // Format data for JSON response
            $data = [
                'id' => $project->getId(),
                'name' => $project->getName(),
                'description' => $project->getDescription(),
                'technos' => $project->getTechnos(),
                'date' => $project->getDate(),
                'weblink' => $project->getWeblink(),
                'githublink' => $project->getGithublink(),
                'background' => $project->getBackground(),
                'detailPic' => $project->getDetailPic(),
                'detailPicMobile' => $project->getDetailPicMobile(),
            ];

        // Return JSON response
        return new JsonResponse($data);
    }
}
