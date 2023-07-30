export const formatDate = dt => {
    const format2md = n => n > 9 ? n : '0' + n

    const y = dt.getFullYear()
    const m = format2md(dt.getMonth() + 1)
    const d = format2md(dt.getDate())
    return `${y}-${m}-${d}`
}