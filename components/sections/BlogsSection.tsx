import { blogs } from "@/lib/data";

export function BlogsSection() {
  return (
    <section id="blogs" className="px-4 py-15 md:px-20 md:pb-20">
      <div className="flex items-end justify-between md:px-0">
        <div>
          <h2 className="mb-3 text-sm font-medium text-secondary md:text-lg">
            BLOGS &amp; JOURNALS
          </h2>
          <h3 className="text-[1.75rem] md:text-5xl">
            Safari Stories &amp; <br />
            Travel Insights
          </h3>
        </div>
        <div className="hidden space-x-6 md:block">
          <button type="button" className="hover-arrow transition">
            <img
              src="/images/arrows/white-left.png"
              alt="back-button"
              className="h-10 opacity-50"
            />
          </button>
          <button type="button" className="hover-arrow transition">
            <img
              src="/images/arrows/white-right.png"
              alt="back-button"
              className="h-10"
            />
          </button>
        </div>
      </div>

      <div className="no-scrollbar my-10 flex w-full gap-7 overflow-x-auto px-4 md:px-0">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="hover-card flex aspect-[12/13] w-96 shrink-0 flex-col justify-between rounded-[20px] bg-cover bg-center bg-no-repeat p-3 md:mb-24 md:aspect-[11/13] md:w-100 md:rounded-none"
            style={{ backgroundImage: `url(${blog.image})` }}
          >
            <div
              className={`mt-4 rounded-lg border px-1.5 py-3 text-center text-lg font-medium text-white ${
                blog.variant === "primary"
                  ? "border-primary bg-primary"
                  : "border-[#ECECEC] bg-white/12 backdrop-blur-xl"
              }`}
            >
              <span className="block">AUG</span>
              <span className="block">26</span>
            </div>
            <div
              className={`space-y-5 p-4 font-medium md:rounded-none ${
                blog.variant === "primary"
                  ? "rounded-lg bg-primary text-white"
                  : "translate-y-0 rounded-lg bg-[#F8F5F0] text-black transform md:translate-y-1/2"
              }`}
            >
              <div className="flex gap-2 text-sm">
                {blog.tags.map((tag) => (
                  <span key={tag} className="text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg">{blog.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
