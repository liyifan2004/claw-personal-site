// 1.0 版本 - 产品风主页
// 原始版本已移动到 v1 分支

import { redirect } from 'next/navigation';

export default function V1Page() {
  // 暂时重定向到主页，实际应该展示 1.0 版本
  redirect('/');
}
