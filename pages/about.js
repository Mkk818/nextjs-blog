export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/',
      permanent: true, // 308
    },
    notFound: true, // 404
  };
}
