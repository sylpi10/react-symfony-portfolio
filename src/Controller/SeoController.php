<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class SeoController extends AbstractController
{
    public function __construct(private readonly ProjectRepository $projects) {}

    #[Route("/sitemap.xml", name: "sitemap", format: "xml")]
    public function sitemap(): Response
    {
        return $this->render("seo/sitemap.xml.twig", [
            "projects" => $this->projects->findAll(),
        ]);
    }

    #[Route("/llms.txt", name: "llms", format: "txt")]
    public function llms(): Response
    {
        return $this->render("seo/llms.txt.twig", [
            "projects" => $this->projects->findAll(),
        ]);
    }
}
