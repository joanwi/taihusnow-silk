import { redirect } from 'next/navigation';

export default function Home() {
  // 使用 next/navigation 的 redirect 直接重定向到根路径
  redirect('/en');
}
