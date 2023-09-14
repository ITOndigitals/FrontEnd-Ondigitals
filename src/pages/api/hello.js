export async function getServerSideProps() {
  try {
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    if (!res.ok) {
      throw new Error("Failed to fetch data from API");
    }
    const repo = await res.json();
    return { props: { data: repo } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } }; // Hoặc trả về dữ liệu mặc định khác
  }
}