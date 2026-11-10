import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

export const name = 'hello-ana'
export const inject = ['router', 'home']

/** ana's workshop plugin: a greeting route and a widget on the home page. */
export function apply(ctx: Context): void {
  ctx.router.route('/hello-ana', new Acryl().get('/', (c) => c.json({ from: 'ana', says: 'hello from the workshop' })))
  ctx.effect(() =>
    ctx.home.widget({ id: 'hello-ana', title: 'Hello from ana', render: () => '<p>Hello from ana</p>' }),
  )
}
