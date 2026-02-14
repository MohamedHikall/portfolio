# استخدم Node 20 LTS
FROM node:20

# إعداد مجلد العمل
WORKDIR /app

# نسخ ملفات المشروع
COPY package*.json ./

# تثبيت الحزم
RUN npm ci

# نسخ باقي الملفات
COPY . .

# بناء المشروع
RUN npm run build

# تعيين الأمر الافتراضي للتشغيل
CMD ["npm", "run", "start"]