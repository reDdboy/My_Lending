source .env

echo "📦 Очистка старой папки dist..."
rm -rf dist

echo "📦 Сборка проекта..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка сборки! Деплой отменен."
    exit 1
fi

echo "📤 Загрузка на сервер..."
rsync -avz --delete -e "ssh -i ~/.ssh/id_rsa" dist/ "$FTP_USER@$SERVER_IP:$FTP_PATH/"

echo "✅ Деплой завершен!"
