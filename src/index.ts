import server from '@src/server'
// import callTest from '@src/util'

/**
 * 初期リロード
 */
const main = () => server()

main().catch((error) => console.error({ error }))

// callTest()
