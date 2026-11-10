import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'
export const name = 'hello-ana'
export const inject = ['router']
export function apply(ctx: Context): void {
  ctx.router.route('/hello-ana', new Acryl().get('/', (c) => c.json({ from: 'ana' })))
}
