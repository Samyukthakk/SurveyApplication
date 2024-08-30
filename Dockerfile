FROM nginx:latest
COPY dist/surveyapplication/browser /usr/share/nginx/html
EXPOSE 80