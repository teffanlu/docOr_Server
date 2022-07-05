DROP table mensaje;
DROP table documentacion;
DROP table archivo;
DROP table empleado;
DROP table admin;
DROP table dataEmpresa;
DROP table empresa;

CREATE TABLE "empresa" ( 
  "id_empresa" serial PRIMARY KEY,
  "nombre" varchar,
  "email" varchar,
  "password" varchar
);

CREATE TABLE "dataEmpresa" (
  "id_empresa" integer PRIMARY KEY,
  "title" varchar,
  "descripcion" varchar,
  "contacto" varchar
);

CREATE TABLE "admin" (
  "id_admin" serial PRIMARY KEY,
  "nombre" varchar,
  "email" varchar,
  "clave" varchar,
  "empresa_id" integer NOT NULL
);

CREATE TABLE "empleado" (
  "id_empleado" serial PRIMARY KEY,
  "nombre" varchar,
  "email" varchar,
  "clave" varchar,
  "cargo" varchar,
  "empresa_id" integer,
  "admin_id" integer NOT NULL
);

CREATE TABLE "archivo" (
  "id_archivo" serial PRIMARY KEY,
  "titulo" varchar,
  "descripcion" varchar,
  "tituloFile" varchar,
  "file" varchar,
  "admin_id" integer NOT NULL
);

CREATE TABLE "documentacion" (
  "id_doc" serial PRIMARY KEY,
  "titulo" varchar,
  "subtitulo" varchar,
  "texto" varchar,
  "link" varchar,
  "linkTipe" varchar,
  "linkName" varchar,
  "admin_id" integer NOT NULL
);

CREATE TABLE "mensaje" (
  "id" serial PRIMARY KEY,
  "nombre" varchar,
  "time" varchar,
  "date" varchar,
  "mensaje" varchar,
  "admin_id" integer NOT NULL
);

ALTER TABLE "admin" ADD FOREIGN KEY ("empresa_id") REFERENCES "empresa" ("id_empresa") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "empleado" ADD FOREIGN KEY ("admin_id") REFERENCES "admin" ("id_admin") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "archivo" ADD FOREIGN KEY ("admin_id") REFERENCES "admin" ("id_admin") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "documentacion" ADD FOREIGN KEY ("admin_id") REFERENCES "admin" ("id_admin") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "mensaje" ADD FOREIGN KEY ("admin_id") REFERENCES "admin" ("id_admin") ON DELETE CASCADE ON UPDATE CASCADE;
