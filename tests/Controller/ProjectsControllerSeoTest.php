<?php

namespace App\Tests\Controller;

use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class ProjectsControllerSeoTest extends WebTestCase
{
    public function testHomeRendersSeoTagsServerSide(): void
    {
        $client = static::createClient();
        $repository = $this->createStub(ProjectRepository::class);
        $repository->method('findAll')->willReturn([]);
        static::getContainer()->set(ProjectRepository::class, $repository);

        $crawler = $client->request('GET', '/');

        self::assertResponseIsSuccessful();
        self::assertSelectorTextSame('title', 'Sylvain Pillet – Développeur React & Frontend freelance à Toulouse');
        self::assertStringContainsString('freelance à Toulouse', $crawler->filter('meta[name="description"]')->attr('content'));
        self::assertSame('http://localhost/', $crawler->filter('link[rel="canonical"]')->attr('href'));
        self::assertSame('http://localhost/images/sylvain-pillet.jpg', $crawler->filter('meta[property="og:image"]')->attr('content'));
        self::assertSame('/favicon.ico', $crawler->filter('link[rel="icon"]')->attr('href'));

        $person = json_decode($crawler->filter('script[type="application/ld+json"]')->text(), true, flags: \JSON_THROW_ON_ERROR);
        self::assertSame('Person', $person['@type']);
        self::assertSame('Toulouse', $person['address']['addressLocality']);
    }
}
