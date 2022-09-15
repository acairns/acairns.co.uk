import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function listPosts() {
    const files = fs.readdirSync(path.join('_posts'));

    const tempPosts = files.map((filename) => {

        const slug = filename.replace('.md', '');

        const markdownWithMeta = fs.readFileSync(
            path.join('_posts', filename),
            'utf-8'
        );

        const { data: frontmatter } = matter(markdownWithMeta);

        if (frontmatter.draft !== false) {
            return null;
        }

        return {
            slug,
            ...frontmatter
        };
    });

    return tempPosts
        .filter(tempPost => tempPost)   // Remove null values (from excluding drafts)
        .sort(sortByDate);              // Sort them by date
}

export function readPost(slug) {
    const markdownWithMeta = fs.readFileSync(
        path.join('_posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        slug,
        content,
        ...frontmatter,
    };
}

export function sortByDate(a, b) {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}
