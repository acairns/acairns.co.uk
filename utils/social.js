import fs from 'fs';
import path from 'path';

const location = "public/mesh/";

export function checkMeshExists(mesh) {
    if (! fs.existsSync(`public${mesh}`)) {
        throw new Error("Mesh not found: " + mesh);
    }
}

export function listMeshes() {
    return fs.readdirSync(path.join(location));
}

export function selectMesh(selected) {
    if (selected) {
        checkMeshExists(selected);
        return selected;
    }

    const meshes = listMeshes();

    return "/mesh/" + meshes[Math.floor(Math.random() * meshes.length)];
}