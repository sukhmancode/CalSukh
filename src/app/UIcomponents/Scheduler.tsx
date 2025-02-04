"use client"
export function Scheduler() {
    return (
        <section className="mx-3 md:mx-0">
        <div className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl py-6 md:py-20 !bg-transparent px-1 md:px-1">
          <div className="flex flex-col pb-3.5 items-center text-center">
            <div>
              <span className="my-3 flex items-center justify-center mb-4">
                <span className="shadow-fade inline-flex items-center justify-start gap-1 rounded-full px-3.5 py-1 bg-secondary">
                  <span className="flex h-4 w-auto items-center justify-center py-[1.33px] transition-transform duration-300 [&_svg]:h-full [&_svg]:w-auto [&_svg]:shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-xs text-[#242424]">How it works</p>
                </span>
              </span>
            </div>
            <h1 className="font-cal !leading-xs md:!leading-h1 text-[32px] lg:text-5xl pb-3">
              <span
                data-br=":rb:"
                data-brr={1}
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  textDecoration: "inherit",
                  textWrap: "balance"
                }}
              >
                With us, scheduling is easy
              </span>
            </h1>
            <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">
              Effortless scheduling for individuals, powerful solutions for
              fast-growing modern companies.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="shadow-fade grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-secondary">
              <div className="px-[20px] py-[20px]">
                <span className="mb-3 inline-block rounded-md bg-gray-200 px-2 py-1 font-mono text-sm font-bold text-gray-500">
                  01
                </span>
                <p className="text-md mb-1.5 font-semibold">Connect your calendar</p>
                <p className="text-content-subtle max-w-[300px] text-[#898989] text-[16px]">
                  We'll handle all the cross-referencing, so you don't have to worry
                  about double bookings.
                </p>
              </div>
              <div className="flex min-h-[200px] justify-center">
                <div className="aspect-video w-full overflow-clip">
                  <div className="@container mt-[-5%] grid h-full w-full grid-cols-1 place-items-center px-1 [&>*]:[grid-area:1/1]">
                    <div className="grid h-full w-full grid-cols-1 place-items-center [&>*]:[grid-area:1/1] connected-calendars_fadeout__UyWpS">
                      <div className="border-subtle aspect-square rounded-full border w-[100cqw]" />
                      <div className="border-subtle aspect-square rounded-full border w-[80cqw]" />
                      <div className="border-subtle aspect-square rounded-full border w-[60cqw]" />
                      <div className="border-subtle aspect-square rounded-full border w-[40cqw]" />
                    </div>
                    <div className="relative z-10 grid h-full w-full grid-cols-1 place-items-center [--fade-start:70%] connected-calendars_fadeout__UyWpS">
                      <span className="shadow-fade absolute block aspect-square h-12 w-12 rounded-full bg-secondary p-3 [&_svg]:h-auto [&_svg]:w-full connected-calendars_logo1__JWR62">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            fill="#fff"
                            d="M16.034 5.156H5.11V16.08h10.923V5.156Z"
                          />
                          <path
                            fill="#EA4335"
                            d="m16.034 20.998 4.915-4.915-2.458-.419-2.457.42-.449 2.247.449 2.668Z"
                          />
                          <path
                            fill="#188038"
                            d="M.196 16.083v3.277C.196 20.265.93 21 1.835 21H5.11l.505-2.458-.505-2.458-2.677-.419-2.238.42Z"
                          />
                          <path
                            fill="#1967D2"
                            d="M20.949 5.157V1.881c0-.906-.733-1.639-1.639-1.639h-3.276c-.3 1.22-.449 2.116-.449 2.691 0 .575.15 1.317.449 2.224 1.087.312 1.906.467 2.457.467.552 0 1.37-.155 2.458-.467Z"
                          />
                          <path
                            fill="#FBBC04"
                            d="M20.95 5.156h-4.916V16.08h4.915V5.156Z"
                          />
                          <path
                            fill="#34A853"
                            d="M16.034 16.078H5.11v4.915h10.923v-4.915Z"
                          />
                          <path
                            fill="#4285F4"
                            d="M16.034.242h-14.2C.93.242.197.975.197 1.881V16.08h4.915V5.157h10.923V.242Z"
                          />
                          <path
                            fill="#4285F4"
                            d="M7.352 13.633c-.408-.276-.691-.68-.845-1.211l.947-.391c.086.328.236.582.45.762.214.18.473.269.776.269.31 0 .576-.094.799-.283a.903.903 0 0 0 .335-.72.892.892 0 0 0-.353-.728c-.235-.189-.53-.283-.882-.283h-.547v-.938h.491c.303 0 .559-.082.766-.246a.81.81 0 0 0 .312-.673.744.744 0 0 0-.279-.607c-.186-.152-.42-.228-.706-.228-.278 0-.5.073-.663.222-.164.15-.287.338-.358.548l-.938-.39c.124-.353.352-.664.687-.933.334-.27.762-.405 1.28-.405.384 0 .73.074 1.035.223.306.149.546.355.72.617.173.264.26.559.26.886 0 .335-.081.617-.242.85-.162.232-.36.409-.594.533v.056c.303.125.566.33.761.594.198.266.298.585.298.956s-.094.703-.283.994c-.188.29-.449.52-.78.687a2.457 2.457 0 0 1-1.117.25 2.314 2.314 0 0 1-1.33-.412Zm5.82-4.703-1.04.753-.52-.79 1.866-1.346h.716v6.35h-1.022V8.93Z"
                          />
                        </svg>
                      </span>
                      <span className="shadow-fade absolute block aspect-square h-12 w-12 rounded-full bg-secondary p-3 [&_svg]:h-auto [&_svg]:w-full connected-calendars_logo2__e3diy">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 23 21"
                          fill="none"
                        >
                          <g clipPath="url(#a)">
                            <path
                              fill="#0A2767"
                              d="M22.185 10.522a.478.478 0 0 0-.234-.413h-.003l-.01-.005-7.622-4.41a1.034 1.034 0 0 0-1.144 0l-7.623 4.41-.009.005a.48.48 0 0 0 .012.832l7.623 4.41a1.044 1.044 0 0 0 1.143 0l7.623-4.41a.477.477 0 0 0 .244-.42Z"
                            />
                            <path
                              fill="#0364B8"
                              d="M6.438 7.579h5.003v4.481H6.438V7.58Zm14.724-4.556V.973a.939.939 0 0 0-.928-.95H7.252a.939.939 0 0 0-.928.95v2.05l7.675 2 7.163-2Z"
                            />
                            <path
                              fill="#0078D4"
                              d="M6.324 3.023h5.117v4.5H6.324v-4.5Z"
                            />
                            <path
                              fill="#28A8EA"
                              d="M16.557 3.023h-5.116v4.5l5.116 4.5h4.605v-4.5l-4.605-4.5Z"
                            />
                            <path
                              fill="#0078D4"
                              d="M11.44 7.523h5.117v4.5H11.44v-4.5Z"
                            />
                            <path
                              fill="#0364B8"
                              d="M11.44 12.023h5.117v4.5H11.44v-4.5Z"
                            />
                            <path
                              fill="#14447D"
                              d="M6.438 12.063h5.003v4.074H6.438v-4.075Z"
                            />
                            <path
                              fill="#0078D4"
                              d="M16.557 12.023h4.605v4.5h-4.605v-4.5Z"
                            />
                            <path
                              fill="url(#b)"
                              d="m21.95 10.915-.01.005-7.623 4.19a1.081 1.081 0 0 1-.516.156l-.416-.238a1.037 1.037 0 0 1-.102-.058l-7.726-4.309h-.003l-.253-.138v8.482a1.037 1.037 0 0 0 1.056 1.018h14.789c.008 0 .016-.004.025-.004.123-.007.243-.032.358-.073a1.386 1.386 0 0 0 .237-.134c.262-.189.417-.488.419-.807v-8.482c0 .163-.09.312-.235.392Z"
                            />
                            <path
                              fill="#0A2767"
                              d="M21.776 10.49v.521l-7.972 5.363-8.252-5.708a.005.005 0 0 0-.005-.005l-.758-.445V9.84l.313-.005.66.37.015.005.056.035s7.756 4.325 7.777 4.335l.297.17c.025-.01.05-.02.082-.03.015-.01 7.7-4.235 7.7-4.235l.087.005Z"
                              opacity=".5"
                            />
                            <path
                              fill="#1490DF"
                              d="m21.95 10.915-.01.005-7.623 4.19c-.033.02-.066.04-.102.056a1.09 1.09 0 0 1-1.04-.056L5.55 10.92l-.009-.005a.449.449 0 0 1-.24-.392v8.482a1.037 1.037 0 0 0 1.054 1.018H21.13a1.037 1.037 0 0 0 1.055-1.017v-8.483c0 .163-.09.312-.234.392Z"
                            />
                            <path
                              fill="#000"
                              d="m14.428 15.047-.114.062a1.08 1.08 0 0 1-.504.16l2.9 3.353 5.06 1.191c.139-.102.249-.237.32-.391l-7.662-4.375Z"
                              opacity=".1"
                            />
                            <path
                              fill="#000"
                              d="m14.945 14.766-.63.346c-.034.02-.068.04-.103.057-.126.06-.262.095-.402.104l1.359 3.661 6.602.88c.26-.19.414-.49.414-.807v-.11l-7.24-4.131Z"
                              opacity=".05"
                            />
                            <path
                              fill="#28A8EA"
                              d="M6.37 20.023h14.758c.227.002.449-.069.632-.2l-8.375-4.794a1.028 1.028 0 0 1-.102-.058l-7.726-4.309h-.004l-.252-.139v8.453c0 .578.478 1.047 1.07 1.047Z"
                            />
                            <path
                              fill="#000"
                              d="M12.464 4.94v10.665a.92.92 0 0 1-.589.85.898.898 0 0 1-.348.07H5.301V4.523h1.023v-.5h5.204a.93.93 0 0 1 .936.917Z"
                              opacity=".1"
                            />
                            <path
                              fill="#000"
                              d="M11.952 5.44v10.665a.798.798 0 0 1-.077.35.932.932 0 0 1-.86.569H5.302v-12.5h5.715a.875.875 0 0 1 .425.104.907.907 0 0 1 .511.812Z"
                              opacity=".2"
                            />
                            <path
                              fill="#000"
                              d="M11.952 5.44v9.665a.934.934 0 0 1-.936.918H5.3v-11.5h5.715a.875.875 0 0 1 .425.105.907.907 0 0 1 .511.812Z"
                              opacity=".2"
                            />
                            <path
                              fill="#000"
                              d="M11.44 5.44v9.665a.93.93 0 0 1-.936.918H5.301v-11.5h5.203a.926.926 0 0 1 .937.917Z"
                              opacity=".2"
                            />
                            <path
                              fill="url(#c)"
                              d="M1.123 4.523h9.38c.518 0 .938.41.938.917v9.167c0 .506-.42.916-.938.916h-9.38a.927.927 0 0 1-.938-.916V5.44c0-.506.42-.917.938-.917Z"
                            />
                            <path
                              fill="#fff"
                              d="M3.116 8.364a2.689 2.689 0 0 1 1.071-1.157A3.298 3.298 0 0 1 5.89 6.79a3.07 3.07 0 0 1 1.576.396c.45.262.811.646 1.042 1.105.251.506.376 1.063.365 1.625a3.692 3.692 0 0 1-.376 1.7 2.73 2.73 0 0 1-1.074 1.143 3.193 3.193 0 0 1-1.634.406 3.137 3.137 0 0 1-1.61-.4 2.71 2.71 0 0 1-1.056-1.107 3.416 3.416 0 0 1-.37-1.605c-.01-.583.114-1.16.364-1.69Zm1.142 2.715c.123.304.332.568.603.76.275.189.605.286.941.278.358.014.71-.087 1.005-.286.267-.192.47-.457.585-.761.128-.34.192-.7.187-1.062a3.164 3.164 0 0 0-.176-1.075 1.7 1.7 0 0 0-.567-.793 1.582 1.582 0 0 0-.996-.3c-.343-.008-.68.09-.964.28-.275.194-.488.46-.613.767a2.985 2.985 0 0 0-.005 2.193v-.001Z"
                            />
                            <path
                              fill="#50D9FF"
                              d="M16.557 3.023h4.605v4.5h-4.605v-4.5Z"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="b"
                              x1="13.743"
                              x2="13.743"
                              y1="10.523"
                              y2="20.023"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#35B8F1" />
                              <stop offset={1} stopColor="#28A8EA" />
                            </linearGradient>
                            <linearGradient
                              id="c"
                              x1="2.14"
                              x2="9.235"
                              y1="3.807"
                              y2="16.381"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1784D9" />
                              <stop offset=".5" stopColor="#107AD5" />
                              <stop offset={1} stopColor="#0A63C9" />
                            </linearGradient>
                            <clipPath id="a">
                              <path fill="#fff" d="M.185.023h22v20h-22z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="shadow-fade absolute block aspect-square h-12 w-12 rounded-full bg-secondary p-3 [&_svg]:h-auto [&_svg]:w-full connected-calendars_logo3__BC76f">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 29 29"
                          fill="none"
                        >
                          <g filter="url(#a)">
                            <g clipPath="url(#b)">
                              <path
                                fill="#F6F5F4"
                                d="M4.212 10.557v7.487c0 .239 0 .477.002.716 0 .201.004.403.01.604a8.9 8.9 0 0 0 .115 1.314c.079.44.209.85.413 1.249a4.21 4.21 0 0 0 1.836 1.836c.399.204.809.332 1.248.412.433.077.875.103 1.314.116.2.005.403.007.604.01h8.92c.201-.002.403-.005.604-.01.438-.013.88-.039 1.314-.116.44-.079.849-.209 1.248-.412a4.213 4.213 0 0 0 1.836-1.836c.204-.4.332-.81.413-1.249.077-.433.103-.874.115-1.314.006-.2.008-.403.01-.604V10.368H4.212v.19Z"
                              />
                              <path
                                fill="#EE544A"
                                d="M24.2 9.234a8.883 8.883 0 0 0-.115-1.314 4.403 4.403 0 0 0-.413-1.249 4.23 4.23 0 0 0-.772-1.064 4.214 4.214 0 0 0-1.064-.772 4.427 4.427 0 0 0-1.248-.412 8.901 8.901 0 0 0-1.314-.116c-.2-.005-.403-.007-.604-.01H9.752c-.201.002-.403.005-.604.01-.438.013-.88.039-1.314.116-.44.079-.849.209-1.248.412A4.213 4.213 0 0 0 4.75 6.67c-.204.4-.332.81-.413 1.249a8.656 8.656 0 0 0-.114 1.314c-.005.2-.008.403-.01.604l-.001.527H24.21l-.001-.527a25.33 25.33 0 0 0-.01-.604Z"
                              />
                              <path
                                fill="#fff"
                                d="M11.088 8.744a.81.81 0 0 1-.33-.31.956.956 0 0 1-.126-.468v-.018h.58l.003.012a.47.47 0 0 0 .05.196c.03.056.072.101.127.133a.393.393 0 0 0 .199.048c.125 0 .22-.038.287-.113.066-.076.1-.185.1-.33V5.946h.598V7.9c0 .302-.086.535-.257.703-.171.167-.411.25-.722.25-.197.001-.367-.036-.508-.109Zm2.547-.022a.977.977 0 0 1-.563-.928V5.945h.598v1.796c0 .184.053.332.157.442.104.11.253.164.444.164.194 0 .34-.054.444-.164a.618.618 0 0 0 .154-.442V5.945h.598v1.85c0 .21-.048.395-.145.555a.978.978 0 0 1-.414.371 1.43 1.43 0 0 1-.638.133 1.43 1.43 0 0 1-.635-.132Zm2.308-2.777h.598v2.366h1.25v.494h-1.849v-2.86h.001Z"
                              />
                              <path
                                fill="#2C2C2C"
                                d="M11.154 13.29h-.024L8.786 14.86v-.835l2.356-1.618h.806v8.739h-.793v-7.854h-.001Zm7.666-.127v-.018h-4.87v-.739h5.687v.77l-4.003 7.969h-.872l4.058-7.982Z"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="b">
                              <rect
                                width={20}
                                height={20}
                                x="4.212"
                                y="4.297"
                                fill="#fff"
                                rx={4}
                              />
                            </clipPath>
                            <filter
                              id="a"
                              width={28}
                              height={28}
                              x=".212"
                              y=".297"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood floodOpacity={0} result="BackgroundImageFix" />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset />
                              <feGaussianBlur stdDeviation={2} />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_2545_2259"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_2545_2259"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="shadow-fade h-auto w-[25%] rounded-full px-4 py-3">
                      <img src="/logo.svg" alt="logo" className="h-auto w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-fade grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-secondary">
              <div className="px-[20px] py-[20px]">
                <span className="mb-3 inline-block rounded-md bg-gray-200 px-2 py-1 font-mono text-sm font-bold text-gray-500">
                  02
                </span>
                <p className="text-md mb-1.5 font-semibold">Set your availability</p>
                <p className="text-content-subtle max-w-[300px] text-[#898989] text-[16px]">
                  Want to block off weekends? Set up any buffers? We make that easy.
                </p>
              </div>
              <div className="flex min-h-[200px] justify-center">
                <div className="grid h-full w-full overflow-clip pl-[20%] [&>*]:[grid-area:1/1]">
                  <div className="border-subtle h-full w-[120%] rounded-tl-3xl border-l border-t bg-secondary p-5 opacity-60" />
                  <div className="border-subtle h-full w-[120%] rounded-tl-3xl border-l border-t bg-secondary p-5 relative -left-4 top-3 opacity-80" />
                  <div className="border-subtle h-full w-[120%] rounded-tl-3xl border-l border-t bg-secondary p-5 relative -left-8 top-6">
                    <div className="grid max-w-[90%] grid-cols-[auto_1fr_auto_1fr] gap-4">
                      <div className="col-span-4 grid grid-cols-[subgrid] items-center gap-2">
                        <div>
                          <div className="flex h-auto w-auto flex-row items-center">
                            <button
                              type="button"
                              role="switch"
                              aria-checked="false"
                              data-state="unchecked"
                              data-disabled=""
                              value="on"
                              className="bg-emphasis cursor-not-allowed h-5 w-[34px] rounded-full shadow-none transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
                            >
                              <span
                                data-state="unchecked"
                                data-disabled=""
                                id="radix-:rc:"
                                className="h-[14px] w-[14px] ltr:translate-x-[4px] rtl:-translate-x-[4px] ltr:[&[data-state='checked']]:translate-x-[17px] rtl:[&[data-state='checked']]:-translate-x-[17px] block rounded-full transition will-change-transform bg-default"
                              />
                            </button>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity opacity-30"
                          defaultValue="8:30 am"
                        />
                        <span className="px-2 transition-opacity opacity-30">-</span>
                        <input
                          type="text"
                          className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity opacity-30"
                          defaultValue="5:00 pm"
                       
                        />
                      </div>
                      <div className="col-span-4 grid grid-cols-[subgrid] items-center gap-2">
                        <div>
                          <div className="flex h-auto w-auto flex-row items-center">
                            <button
                              type="button"
                              role="switch"
                              aria-checked="true"
                              data-state="checked"
                              data-disabled=""
                              value="on"
                              className="bg-brand-default dark:bg-brand-emphasis cursor-not-allowed h-5 w-[34px] rounded-full shadow-none transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
                            >
                              <span
                                data-state="checked"
                                data-disabled=""
                                id="radix-:rd:"
                                className="h-[14px] w-[14px] ltr:translate-x-[4px] rtl:-translate-x-[4px] ltr:[&[data-state='checked']]:translate-x-[17px] rtl:[&[data-state='checked']]:-translate-x-[17px] block rounded-full transition will-change-transform bg-brand-accent shadow-inner"
                              />
                            </button>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity"
                          defaultValue="9:00 am"
                         
                        />
                        <span className="px-2 transition-opacity">-</span>
                        <input
                          type="text"
                          className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity"
                          defaultValue="6:00 pm"
                
                        />
                      </div>
                      <div className="col-span-4 grid grid-cols-[subgrid] items-center gap-2">
                        <div>
                          <div className="flex h-auto w-auto flex-row items-center">
                            <button
                              type="button"
                              role="switch"
                              aria-checked="false"
                              data-state="unchecked"
                              data-disabled=""
                        
                              value="on"
                              className="bg-emphasis cursor-not-allowed h-5 w-[34px] rounded-full shadow-none transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
                            >
                              <span
                                data-state="unchecked"
                                data-disabled=""
                                id="radix-:re:"
                                className="h-[14px] w-[14px] ltr:translate-x-[4px] rtl:-translate-x-[4px] ltr:[&[data-state='checked']]:translate-x-[17px] rtl:[&[data-state='checked']]:-translate-x-[17px] block rounded-full transition will-change-transform bg-default"
                              />
                            </button>
                          </div>
                        </div>
                        <input
                          type="text"
                          className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity opacity-30"
                          defaultValue="10:00 am"
                        />
                        <span className="px-2 transition-opacity opacity-30">-</span>
                        <input
                          type="text"
                          className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity opacity-30"
                          defaultValue="7:00 pm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-fade grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-secondary">
              <div className="px-[20px] py-[20px]">
                <span className="mb-3 inline-block rounded-md bg-gray-200 px-2 py-1 font-mono text-sm font-bold text-gray-500">
                  03
                </span>
                <p className="text-md mb-1.5 font-semibold">Choose how to meet</p>
                <p className="text-content-subtle max-w-[300px] text-[#898989] text-[16px]">
                  It could be a video chat, phone call, or a walk in the park!
                </p>
              </div>
              <div className="flex min-h-[200px] justify-center">
                <div className="grid h-full w-full max-w-[600px] overflow-clip pl-[10%] [&>*]:[grid-area:1/1]">
                  <div className="border-subtle h-full w-[120%] rounded-t-3xl border-l border-r border-t bg-secondary md:w-full lg:w-[120%] relative grid grid-rows-[auto_1fr_auto] opacity-80">
                    <div className="flex gap-1 border-b border-gray-200 px-5 py-3">
                      <span className="h-2 w-2 rounded-full bg-gray-400" />
                      <span className="h-2 w-2 rounded-full bg-gray-400" />
                      <span className="h-2 w-2 rounded-full bg-gray-400" />
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="relative grid place-items-center border-r border-gray-200 py-4">
                        <div className="absolute h-16 w-16 animate-ping rounded-full bg-gray-400/20" />
                        <svg
                          width={46}
                          height={56}
                          viewBox="0 0 46 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4">
                            <path
                              d="M22.6401 0.870911C15.4435 0.870911 9.60945 6.70492 9.60945 13.9015C9.60945 21.0982 15.4435 26.9322 22.6401 26.9322C29.8367 26.9322 35.6707 21.0982 35.6707 13.9015C35.6707 6.70492 29.8367 0.870911 22.6401 0.870911Z"
                              fill="#727272"
                            />
                            <path
                              d="M22.6404 29.8279C12.9174 29.8279 5.15769 34.9419 1.07493 42.5358C-0.747107 45.9247 -0.0603644 49.4423 1.95953 51.9551C3.90921 54.3806 7.07211 55.8891 10.4647 55.8891H34.8161C38.2087 55.8891 41.3716 54.3806 43.3213 51.9551C45.3412 49.4423 46.0279 45.9247 44.2059 42.5358C40.1231 34.9419 32.3634 29.8279 22.6404 29.8279Z"
                              fill="#727272"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="relative grid place-items-center py-4">
                        <div className="absolute h-16 w-16 animate-ping rounded-full bg-gray-400/20" />
                        <svg
                          width={46}
                          height={56}
                          viewBox="0 0 46 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.4">
                            <path
                              d="M22.6401 0.870911C15.4435 0.870911 9.60945 6.70492 9.60945 13.9015C9.60945 21.0982 15.4435 26.9322 22.6401 26.9322C29.8367 26.9322 35.6707 21.0982 35.6707 13.9015C35.6707 6.70492 29.8367 0.870911 22.6401 0.870911Z"
                              fill="#727272"
                            />
                            <path
                              d="M22.6404 29.8279C12.9174 29.8279 5.15769 34.9419 1.07493 42.5358C-0.747107 45.9247 -0.0603644 49.4423 1.95953 51.9551C3.90921 54.3806 7.07211 55.8891 10.4647 55.8891H34.8161C38.2087 55.8891 41.3716 54.3806 43.3213 51.9551C45.3412 49.4423 46.0279 45.9247 44.2059 42.5358C40.1231 34.9419 32.3634 29.8279 22.6404 29.8279Z"
                              fill="#727272"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex items-center justify-center gap-4 rounded-t-2xl border-l border-r border-t border-gray-200 px-5 py-3">
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.66663 5C3.56206 5 2.66663 5.89543 2.66663 7V9C2.66663 10.1046 3.56206 11 4.66663 11H8.66663C9.7712 11 10.6666 10.1046 10.6666 9V7C10.6666 5.89543 9.7712 5 8.66663 5H4.66663ZM11.6666 7.44906C11.6666 7.16343 11.7888 6.89142 12.0023 6.70165L13.0023 5.81276C13.6472 5.23952 14.6666 5.69733 14.6666 6.56018V9.43982C14.6666 10.3027 13.6472 10.7605 13.0023 10.1872L12.0023 9.29834C11.7888 9.10857 11.6666 8.83657 11.6666 8.55093V7.44906Z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.66659 2C9.73186 2 10.6026 2.83285 10.6632 3.88293L6.66659 7.87956V4C6.66659 2.89543 7.56202 2 8.66659 2Z"
                            fill="#fff"
                          />
                          <path
                            d="M10.6666 6.70711L14.3535 3.02022C14.5487 2.82496 14.5487 2.50838 14.3535 2.31311C14.1582 2.11785 13.8416 2.11785 13.6464 2.31311L2.9797 12.9798C2.78444 13.175 2.78444 13.4916 2.9797 13.6869C3.17496 13.8821 3.49154 13.8821 3.68681 13.6869L6.1303 11.2434C6.70617 11.667 7.40714 11.9055 8.16659 11.9769V13.5C8.16659 13.7761 8.39044 14 8.66659 14C8.94273 14 9.16659 13.7761 9.16659 13.5V11.9769C10.0658 11.8924 10.8831 11.5736 11.5077 10.9905C12.2522 10.2957 12.6666 9.27833 12.6666 8C12.6666 7.72386 12.4427 7.5 12.1666 7.5C11.8904 7.5 11.6666 7.72386 11.6666 8C11.6666 9.05501 11.331 9.78763 10.8254 10.2595C10.3141 10.7367 9.57214 11 8.66659 11C7.94589 11 7.32879 10.8332 6.84913 10.5246L7.6506 9.72309C7.94836 9.89904 8.29568 10 8.66659 10C9.77116 10 10.6666 9.10457 10.6666 8V6.70711Z"
                            fill="#fff"
                          />
                          <path
                            d="M5.74065 8.8055C5.69246 8.56097 5.66659 8.29291 5.66659 8C5.66659 7.72386 5.44273 7.5 5.16659 7.5C4.89044 7.5 4.66659 7.72386 4.66659 8C4.66659 8.59793 4.75725 9.13877 4.92994 9.61621L5.74065 8.8055Z"
                            fill="black"
                          />
                        </svg>
                        <svg
                          width={11}
                          height={11}
                          viewBox="0 0 11 11"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.66659 10C8.6121 10 10.9999 7.91067 10.9999 5.33334C10.9999 2.75601 8.6121 0.666672 5.66659 0.666672C2.72107 0.666672 0.333252 2.75601 0.333252 5.33334C0.333252 6.29055 0.662614 7.18044 1.22759 7.921C1.31734 8.10307 1.5023 8.6858 0.999917 9.8243C0.75341 10.3294 0.644656 10.6667 0.999917 10.6667C1.74704 10.6667 2.09921 10.4235 2.46517 10.1708C2.7706 9.95997 3.08564 9.74246 3.6479 9.65413C4.27058 9.8771 4.95218 10 5.66659 10Z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          width={11}
                          height={10}
                          viewBox="0 0 11 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.99996 0H2.33329C1.41282 0 0.666626 0.746192 0.666626 1.66667V6.33333C0.666626 7.25381 1.41282 8 2.33329 8H8.99996C9.92043 8 10.6666 7.25381 10.6666 6.33333V1.66667C10.6666 0.746192 9.92043 0 8.99996 0ZM1.66663 1.66667C1.66663 1.29848 1.9651 1 2.33329 1H8.99996C9.36815 1 9.66663 1.29848 9.66663 1.66667V6.33333C9.66663 6.70152 9.36815 7 8.99996 7H2.33329C1.9651 7 1.66663 6.70152 1.66663 6.33333V1.66667ZM2.99996 9C2.72382 9 2.49996 9.22386 2.49996 9.5C2.49996 9.77614 2.72382 10 2.99996 10H8.33329C8.60944 10 8.83329 9.77614 8.83329 9.5C8.83329 9.22386 8.60944 9 8.33329 9H2.99996Z"
                            fill="#fff"
                          />
                        </svg>
                        <svg
                          width={13}
                          height={8}
                          viewBox="0 0 13 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.37111 3.85547H3.08389V3.07859H3.37547C3.66269 3.07859 3.81936 3.18248 3.81936 3.44444V3.46251C3.81936 3.72448 3.67139 3.85547 3.37111 3.85547Z"
                            fill="#fff"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.666626 2.66667C0.666626 1.19391 1.86053 0 3.33329 0H9.99996C11.4727 0 12.6666 1.19391 12.6666 2.66667V5.33333C12.6666 6.80609 11.4727 8 9.99996 8H3.33329C1.86053 8 0.666626 6.80609 0.666626 5.33333V2.66667ZM2.19611 5.61247V2.38302H3.41463C4.22843 2.38302 4.68103 2.72629 4.68103 3.40831V3.42638C4.68103 3.88708 4.44603 4.14454 4.11964 4.27552L4.86381 5.61247H3.9238L3.29278 4.45619H3.08389V5.61247H2.19611ZM5.59202 5.61247V2.38302H7.74185V3.09666H6.47981V3.65221H7.48509V4.31165H6.47981V4.89883H7.81148V5.61247H5.59202ZM9.99821 5.66667C10.8033 5.66667 11.3865 5.23306 11.4474 4.39747H10.5596C10.5161 4.75429 10.2941 4.92593 9.9808 4.92593C9.55432 4.92593 9.31497 4.59621 9.31497 4.01355V3.97742C9.31497 3.39024 9.56738 3.06504 9.96775 3.06504C10.2811 3.06504 10.4552 3.24571 10.49 3.57543H11.4082C11.3342 2.72177 10.7728 2.33333 9.9634 2.33333C9.05385 2.33333 8.37496 2.98826 8.37496 3.98193C8.37496 4.97876 8.97595 5.66667 9.99821 5.66667Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}