const AVALPAY_URL =
  'https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00018651&origen=buscar'

export default function PaymentSection() {
  return (
    <section id="pagos" className="scroll-mt-28 bg-cream-dark/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="card-surface overflow-hidden rounded-2xl">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="section-label mb-2">Administración</p>
              <h2 className="section-heading mb-4 text-2xl font-bold sm:text-3xl">
                Pagos en línea
              </h2>
              <p className="mb-6 leading-relaxed text-ink-muted">
                Realice el pago de su cuota de administración y otros conceptos
                autorizados a través de Aval Pay Center, la plataforma oficial de
                pagos de la copropiedad.
              </p>
              <a
                href={AVALPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition"
              >
                Ir a pagos Aval Pay Center
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center justify-center bg-gradient-to-br from-cream to-cream-dark p-8 sm:p-10">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-copper/20 bg-white shadow-sm">
                  <svg
                    className="h-10 w-10 text-copper"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-ink-muted">
                  Pago seguro y disponible las 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
