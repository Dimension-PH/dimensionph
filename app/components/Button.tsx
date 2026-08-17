import Link from "next/link"

type BtnProps = {
  redirect: string
  className?: string
  text: string
  /** Force new-tab behaviour. Defaults: external http(s) links open in a new tab,
   *  internal routes and mailto:/tel: links stay in the current tab. */
  newTab?: boolean
}

const isHttpExternal = (href: string) => /^(https?:)?\/\//i.test(href)
const isProtocolLink = (href: string) => /^(mailto:|tel:|sms:)/i.test(href)

export default function Btn({ redirect, className, text, newTab }: BtnProps) {
  // Keeps the visual identity of the old <button>: block-level box model,
  // centred label, pointer cursor.
  const classes = `inline-flex items-center justify-center text-center cursor-pointer ${className ?? ""}`

  const external = isHttpExternal(redirect)
  const protocolLink = isProtocolLink(redirect)

  // External sites open in a new tab so visitors don't lose dimension-ph.com.
  // mailto:/tel: must stay in the current tab or they open a blank window.
  const openInNewTab = newTab ?? (external && !protocolLink)

  if (external || protocolLink) {
    return (
      <a
        href={redirect}
        className={classes}
        {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {text}
      </a>
    )
  }

  // Internal routes use next/link for client-side navigation + automatic
  // prefetching, instead of a full document reload.
  return (
    <Link href={redirect} className={classes}>
      {text}
    </Link>
  )
}
