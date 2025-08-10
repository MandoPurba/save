/**
 * Returns the initials from a given name string.
 * - For single-word names, returns the first letter.
 * - For multi-word names, returns the first letter of the first and last words.
 * - Handles extra spaces and empty input gracefully.
 *
 * @param name - The full name to extract initials from.
 * @returns The initials in uppercase, or an empty string if input is invalid.
 */
export function getInitials(name: string): string {
    if (!name || typeof name !== 'string') return '';

    const parts = name.trim().split(/\s+/).filter(Boolean);

    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0][0].toUpperCase();

    const firstInitial = parts[0][0].toUpperCase();
    const lastInitial = parts[parts.length - 1][0].toUpperCase();

    return firstInitial + lastInitial;
}