
import contentTypeBuilder from '@strapi/plugin-content-type-builder/strapi-admin';
import email from '@strapi/plugin-email/strapi-admin';
import upload from '@strapi/plugin-upload/strapi-admin';
import ckeditor from 'C:/Users/DELL/Desktop/nextjs/strapi_blog/blog/src/plugins/strapi-plugin-ckeditor/strapi-admin';
import i18N from '@strapi/plugin-i18n/strapi-admin';
import usersPermissions from '@strapi/plugin-users-permissions/strapi-admin';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'ckeditor': ckeditor,
  'i18n': i18N,
  'users-permissions': usersPermissions,
};

export default plugins;
