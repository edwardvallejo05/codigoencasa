import { component$, Slot, useStore } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Footer from '~/components/widgets/Footer'
import Header from '~/components/widgets/Header'
import NavBar from '~/components/widgets/NavBar'
import ExtraBar from '~/components/widgets/ExtraBar'

export default component$(() => {
    const store = useStore({
        options: [
            { name: 'Primeros pasos', link: '/docs' },
            { name: 'Instalación', link: '/docs/install' },
            { name: 'Configuración', link: '/docs/settings' },
            { name: 'Migración', link: '/docs/migration' },
        ],
        extraOptions: [
            { name: 'Primeros pasos', link: '/docs', class: 'font-semibold' },
            { name: 'Instalación', link: '/docs' },
            { name: 'Configuración', link: '/docs' },
            { name: 'Forma de pensar', link: '/docs' },
        ],
    })

    return (
        <>
            <Header />
            <main class="container mx-auto px-12 ">
                <div class={'grid grid-cols-5 gap-1 min-h-min'}>
                    <div class={'px-3 col-span-1  '}>
                        <NavBar options={store.options} />
                    </div>
                    <div class={'col-span-3 slot pb-5'}>
                        <Slot />
                    </div>
                    <div class={'px-3 col-span-1  '}>
                        <ExtraBar options={store.extraOptions} />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
})

export const head: DocumentHead = {
    title: 'Qwind — Free template for starts a website using Qwik + Tailwind CSS',
    meta: [
        {
            name: 'description',
            content:
                'Qwind is a free and ready to start template to make your website using Qwik and Tailwind CSS.',
        },
    ],
}