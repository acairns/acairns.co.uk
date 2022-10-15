import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { selectMesh } from "@/utils/social";

export function listPosts() {
    const files = fs.readdirSync(path.join('_posts'));

    const tempPosts = files.map((filename) => {

        if (filename.startsWith('!')) {
            return null;
        }

        const slug = filename.replace('.md', '');

        return readPost(slug);
    });

    return tempPosts
        .filter(tempPost => tempPost)   // Remove null values (from excluding drafts)
        .sort(sortByDate);              // Sort them by date
}

export function readPost(slug) {
    const markdownWithMeta = fs.readFileSync(
        path.join('_posts', slug + '.md'),
        'utf-8'
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        slug,
        content,
        frontmatter,
        mesh: selectMesh(frontmatter.mesh)
    };
}

export function sortByDate(a, b) {
    return new Date(b.date) - new Date(a.date)
}
