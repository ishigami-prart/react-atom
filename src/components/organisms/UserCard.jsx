export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        widht={160}
        src="https://source.unsplash.com/Mv9hjnEUHR4"
        alt="プロフィール"
      />
      <p>名前</p>
      <dl>
        <dt>メール</dt>
        <dd>111@aaa.com</dd>
        <dt>電話</dt>
        <dd>000-0000-0000</dd>
        <dt>会社名</dt>
        <dd>セクション株式会社</dd>
      </dl>
    </div>
  );
};
