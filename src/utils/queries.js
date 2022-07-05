module.exports = {
    //Querys user
    getUsers: 'SELECT * FROM empleado WHERE admin_id = $1',
    getAdmins: 'SELECT * FROM admin WHERE empresa_id = $1',
    getName1: 'SELECT * FROM empleado WHERE nombre = $1',
    getName2: 'SELECT * FROM admin WHERE nombre = $1',
    getName3: 'SELECT * FROM empresa WHERE nombre = $1',

    createEmpresa: 'INSERT INTO empresa (nombre, email, password) VALUES ($1, $2, $3) RETURNING *',
    createAdmin: 'INSERT INTO admin (nombre, email, clave, empresa_id) VALUES ($1, $2, $3, $4) RETURNING *',
    createEmpleado: 'INSERT INTO empleado (nombre, email, cargo, clave, empresa_id, admin_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',

    deleteEmpleado: 'DELETE FROM "empleado" WHERE "id_empleado" = $1',

    //Querys info / data / file / message ...
    getDataEmpresa: 'SELECT * FROM "dataEmpresa" WHERE id_empresa = $1',
    getDocument: 'SELECT * FROM "documentacion" WHERE admin_id = $1',
    getMensaje: 'SELECT * FROM "mensaje" WHERE admin_id = $1',

    setDocument: 'INSERT INTO "documentacion" (titulo, subtitulo, texto, link, "linkTipe", "linkName", admin_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    deleteDocument: 'DELETE FROM "documentacion" WHERE "id_doc" = $1',

    setDataEmpresa: 'INSERT INTO "dataEmpresa" (title, descripcion, contacto, id_empresa) VALUES ($1, $2, $3, $4) RETURNING *',
    updateDataEmp: 'UPDATE "dataEmpresa" SET title = $1, descripcion = $2, contacto = $3 WHERE id_empresa = $4 RETURNING *',

    setMensaje: 'INSERT INTO "mensaje" (nombre, mensaje, date, time, admin_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',

    getArchivo: 'SELECT * FROM "archivo" WHERE "admin_id" = $1',
    setArchivo: 'INSERT INTO "archivo" (titulo, descripcion, "tituloFile", "file", admin_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    deleteArchivo: 'DELETE FROM "archivo" WHERE "id_archivo" = $1',
}