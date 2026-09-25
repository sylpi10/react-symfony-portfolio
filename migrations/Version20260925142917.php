<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260925142917 extends AbstractMigration
{
    // ancienne URL => URL finale (les anciennes répondent en 301)
    private const array WEBLINKS = [
        'https://www.ludilabel.fr/produits/etiquettes/nominatives/packs/pack-etiquettes-decouverte' => 'https://www.ludilabel.fr/etiquettes/pack-etiquettes-decouverte',
        'https://www.directicimes.com/' => 'https://directicimes.com/',
    ];

    private const array GITHUBLINKS = [
        'https://github.com/sylpi10/myShop/tree/dev' => 'https://github.com/sylpi10/atelier_chenoa_django/tree/dev',
        'https://github.com/sylpi10/toulouse-sport-clubs' => 'https://github.com/sylpi10/sf_toulouse-sport-clubs',
        'https://github.com/sylpi10/react-symfony-portfolio' => 'https://github.com/sylpi10/react-inertia-symfony-portfolio',
    ];

    // liens présents dans le HTML des descriptions
    private const array DESCRIPTION_LINKS = [
        'https://www.ludilabel.fr/produits/etiquettes/nominatives/packs/pack-etiquettes-ecole-primaire' => 'https://www.ludilabel.fr/etiquettes/etiquettes-ecole',
        'https://www.ludilabel.fr/produits/etiquettes/nominatives/vetements/chaussures/etiquettes-chaussures-petit-pied' => 'https://www.ludilabel.fr/etiquettes/etiquettes-chaussures-enfant',
        'https://www.ludilabel.fr/produits/etiquettes/rangement/appareils/languettes-autocollantes-marque-cables' => 'https://www.ludilabel.fr/etiquettes/languettes-autocollantes-marque-cables',
    ];

    public function getDescription(): string
    {
        return 'Liens projets : remplace les URLs qui redirigent par leur destination finale';
    }

    public function up(Schema $schema): void
    {
        foreach (self::WEBLINKS as $old => $new) {
            $this->addSql('UPDATE project SET weblink = ? WHERE weblink = ?', [$new, $old]);
        }
        foreach (self::GITHUBLINKS as $old => $new) {
            $this->addSql('UPDATE project SET githublink = ? WHERE githublink = ?', [$new, $old]);
        }
        foreach (self::DESCRIPTION_LINKS as $old => $new) {
            $this->addSql('UPDATE project SET description = REPLACE(description, ?, ?)', ['"'.$old.'"', '"'.$new.'"']);
        }
    }

    public function down(Schema $schema): void
    {
        foreach (self::WEBLINKS as $old => $new) {
            $this->addSql('UPDATE project SET weblink = ? WHERE weblink = ?', [$old, $new]);
        }
        foreach (self::GITHUBLINKS as $old => $new) {
            $this->addSql('UPDATE project SET githublink = ? WHERE githublink = ?', [$old, $new]);
        }
        foreach (self::DESCRIPTION_LINKS as $old => $new) {
            $this->addSql('UPDATE project SET description = REPLACE(description, ?, ?)', ['"'.$new.'"', '"'.$old.'"']);
        }
    }
}
