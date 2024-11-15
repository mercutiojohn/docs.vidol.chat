---
title: Détails sur le format de fichier VMD
description: Le fichier VMD (Vocaloid Motion Data) est un format de fichier important utilisé dans MikuMikuDance (MMD) pour stocker des données d'animation.
keywords: VMD, Vocaloid Motion Data, MikuMikuDance, MMD, données d'animation, format de fichier
icon: file-video
---

Le fichier VMD est principalement utilisé pour enregistrer les mouvements des personnages, les trajectoires de la caméra et d'autres informations d'animation. Cet article présentera en détail la structure et l'utilisation des fichiers VMD.

## Structure du fichier

Le fichier VMD est un fichier binaire qui contient plusieurs parties :

<AccordionGroup>
  <Accordion title="Informations d'en-tête">
    - Les 30 premiers octets décrivent la version :
      - La version v1 est identifiée par "Vocaloid Motion Data file"
      - La version v2 est identifiée par "Vocaloid Motion Data 0002"
    - Nom du modèle (codé en ShiftJIS) :
      - 10 octets dans v1
      - 20 octets dans v2
  </Accordion>

  <Accordion title="Données des images clés">
    Chaque partie commence par une valeur de type `uint32_t`, indiquant le nombre d'images clés dans cette partie. Elle contient les enregistrements suivants :
    - Images clés des os (Bone KeyFrame)
    - Images clés des morphes (Morph KeyFrame)
    - Images clés de la caméra (Camera KeyFrame)
    - Images clés de la lumière (Light KeyFrame)
  </Accordion>
</AccordionGroup>

## Détails des enregistrements d'images clés

### Enregistrement des images clés des os

<CodeGroup>
  ```cpp Bone KeyFrame
  struct BoneKeyFrame {
    char BoneName[15];     // Nom de l'os (codé en ShiftJIS)
    uint32_t FrameTime;    // Temps de l'image clé
    float Translation[3];  // Coordonnées de position (X, Y, Z)
    float Rotation[4];     // Quaternaire de rotation (X, Y, Z, W)
    uint8_t Curve[64];     // Données de courbe pour les directions X, Y, Z (16 octets chacune)
  };
  ```
</CodeGroup>

### Enregistrement des images clés des morphes

<CodeGroup>
  ```cpp Morph KeyFrame
  struct MorphKeyFrame {
    char MorphName[15];    // Nom du morphe (codé en ShiftJIS)
    uint32_t FrameTime;    // Temps de l'image clé
    float Weight;          // Valeur de poids
  };
  ```
</CodeGroup>

<Note>
  La structure des images clés de la caméra et de la lumière est similaire, mais contient des paramètres spécifiques à chacune.
</Note>

## Utilisation et compatibilité

Les fichiers VMD sont généralement utilisés avec le logiciel MikuMikuDance, permettant l'importation et l'exportation de données d'animation entre différents modèles.

<Warning>
  Étant donné que différents modèles peuvent avoir des structures d'os différentes, il est important de s'assurer de la compatibilité entre le modèle et les données d'animation lors de l'utilisation des fichiers VMD, afin d'éviter des effets d'animation non naturels.
</Warning>

## Conclusion

Le format de fichier VMD est une partie indispensable de la création d'animations MMD. En enregistrant avec précision divers paramètres d'animation, il permet aux utilisateurs de créer des animations fluides et expressives. Comprendre sa structure et son utilisation est essentiel pour produire des animations MMD de haute qualité.

<Card title="En savoir plus" icon="book-open" href="https://mikumikudance.fandom.com/wiki/VMD_file_format">
  Visitez le Wiki MMD pour en savoir plus sur le format de fichier VMD
</Card>

