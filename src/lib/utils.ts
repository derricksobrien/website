/**
 * Utility functions for the application
 */

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
