FROM nginx:alpine

# Use our own nginx config (Cloud Run, SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static files exported by: npx expo export --platform web
COPY dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

