// utils.js
export function generateSlug(name) {
    return name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, ''); // Removes non-word characters except hyphens
  }
  