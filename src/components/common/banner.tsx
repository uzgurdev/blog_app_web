import banner from "./banner.module.scss";

export default function Banner() {
  return (
    <div className={banner.header}>
      <div
        className={banner.header_banner}
        style={{
          backgroundImage: `url("https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")`,
        }}
      ></div>

      <div className={banner.post}>
        <h1 className={banner.post_title}>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>

        <div className={banner.post_footer}>
          <div className={banner.post_author}>
            <div
              className={banner.post_avatar}
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              }}
            ></div>
            <div className="post_author_name">Uzgur</div>
          </div>
          <div className="post_date">December 12, 2022</div>
        </div>
      </div>
    </div>
  );
}
