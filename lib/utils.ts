export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => {
      // Handle special cases
      if (word === 'and') return '&';
      if (word === 'ac') return 'AC';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}