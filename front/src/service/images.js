// Les noms de fichiers des projets viennent de l'API avec leur extension d'origine
export const toWebp = (fileName) => fileName?.replace(/\.(jpe?g|png)$/i, ".webp");
