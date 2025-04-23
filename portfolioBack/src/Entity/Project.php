<?php

namespace App\Entity;

use App\Repository\ProjectRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private string $name;

    #[ORM\Column(length: 255)]
    private ?string $date = null;

    #[ORM\Column(length: 255)]
    private ?string $technos = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $weblink = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $githublink = null;

    #[ORM\Column(length: 255)]
    private ?string $detailPic = null;

    #[ORM\Column(length: 255)]
    private ?string $background = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }



    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getDate(): string
    {
        return $this->date;
    }

    public function setDate(string $date): string
    {
        $this->date = $date;

        return $this;
    }

    public function getTechnos(): ?string
    {
        return $this->technos;
    }

    public function setTechnos(string $technos): static
    {
        $this->technos = $technos;

        return $this;
    }

    public function getWeblink(): ?string
    {
        return $this->weblink;
    }

    public function setWeblink(?string $weblink): static
    {
        $this->weblink = $weblink;

        return $this;
    }

    public function getGithublink(): ?string
    {
        return $this->githublink;
    }

    public function setGithublink(?string $githublink): static
    {
        $this->githublink = $githublink;

        return $this;
    }

    public function getDetailPic(): ?string
    {
        return $this->detailPic;
    }

    public function setDetailPic(string $detailPic): static
    {
        $this->detailPic = $detailPic;

        return $this;
    }

    public function getBackground(): ?string
    {
        return $this->background;
    }

    public function setBackground(string $background): static
    {
        $this->background = $background;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
