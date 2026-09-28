export const metadata = {
  title: "Політика конфіденційності",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold">Політика конфіденційності</h1>
      <p className="mb-8 text-neutral-700">Ця сторінка пояснює, які персональні дані збирає цей сайт, навіщо і як звʼязатися з контролером. Вона стосується відвідувачів сайту.</p>

      <h2 className="mb-2 mt-8 text-xl font-medium">Контролер даних</h2>
      <p className="text-neutral-800">Makarenko Reinhold</p>
        <p className="text-sm text-neutral-600">annadizhenko@gmail.com</p>
        <p className="text-sm text-neutral-600">+4796684397</p>

      <h2 className="mb-2 mt-8 text-xl font-medium">Що збираємо</h2>
      <p className="text-neutral-700">Лише те, що ви надсилаєте самі через форму: імʼя, контакти й текст повідомлення. Сайт не профілює відвідувачів і не продає дані.</p>

      <h2 className="mb-2 mt-8 text-xl font-medium">Навіщо</h2>
      <p className="text-neutral-700">Щоб відповісти на ваше звернення і, якщо ви просили, надати послугу. Підстава — ваш запит і наш законний інтерес відповісти на нього.</p>

      <h2 className="mb-2 mt-8 text-xl font-medium">Скільки зберігаємо</h2>
      <p className="text-neutral-700">Звернення зберігаються стільки, скільки потрібно для відповіді та бухгалтерських обовʼязків, далі видаляються.</p>

      <h2 className="mb-2 mt-8 text-xl font-medium">Ваші права</h2>
      <p className="text-neutral-700">Ви можете дізнатися, які дані про вас у нас є, вимагати виправлення чи видалення, заперечити проти обробки. Напишіть на адресу нижче — ми відповімо.</p>

      <h2 className="mb-2 mt-8 text-xl font-medium">Файли cookie</h2>
      <p className="text-neutral-700">Сайт не використовує рекламні чи аналітичні cookie; нічого, що потребує вашої згоди, не встановлюється.</p>
    </main>
  );
}
