'use client'

type BtnProps = {
  redirect: string
  className?: string
  text: string
}

export default function Btn({ redirect, className, text }: BtnProps) {
  return (
    <button
      className={`${className}`}
      onClick={() => window.location.href = redirect}
    >
      { text }
    </button>
  )
}