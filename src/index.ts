import server from '@src/server'

/**
 * 初期リロード
 */
const main = () => server()

main().catch((error) => console.error({ error }))
