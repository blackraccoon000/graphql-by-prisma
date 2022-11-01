// import allUsers from '@src/util/allUsers'
// import selectUsers from '@src/util/selectUsers'
// import existsUsers from '@src/util/existsUsers'
// import createPostForUser from '@src/util/createPostForUser'
// import altCreatePostForUser from '@src/util/altCreatePostForUser'
// import updatePostForUser from '@src/util/updatePostForUser'
import altUpdatePostForUser from '@src/util/altUpdatePostForUser'

/**
 * テスト用コードをまとめる。
 */
const callTest = () => {
  /**
   * user情報の全件取得
   */
  // allUsers()
  /**
   * user情報を個別取得
   */
  // selectUsers(10)
  // existsUsers(2)
  // altCreatePostForUser(1, {
  //   title: 'test',
  //   content: 'xxxxxx',
  //   published: true,
  // })
  /**
   * post情報のcreateに使用する。
   */
  // createPostForUser(2, {
  //   title: 'Great books to read',
  //   content: 'The War of Art',
  //   published: true,
  // }).then((res) => {
  //   console.log(res)
  // })
  /**
   * post情報のupdateに使用する
   */
  // updatePostForUser(12, {
  //   title: 'Update Title!!6',
  //   content: `Update Content6
  //   Yeh!Yeh!Yeh!
  //   `,
  //   published: false,
  // })
  altUpdatePostForUser(12, {
    title: 'Update Title!!7',
    content: `Update Content7
    Yeh!Yeh!Yeh!
    `,
    published: false,
  })
}

export default callTest
