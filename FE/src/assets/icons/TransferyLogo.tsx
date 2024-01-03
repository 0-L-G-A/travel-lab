import { memo, SVGProps } from 'react';

const TransferyLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="117"
    height="24"
    viewBox="0 0 117 24"
    fill="none"
    {...props}
  >
    <path
      d="M4.28906 17.5078C4.67969 13.7109 4.91406 9.53125 4.99219 4.96875L0 5.09766L0.0585938 3.79688C0.0898438 3.10156 0.113281 2.33984 0.128906 1.51172C2.34766 1.52734 4.93359 1.53516 7.88672 1.53516L10.7812 1.52344H13.5938L15.1172 1.51172L15.0469 2.64844C15.0156 3.25781 14.9922 3.76172 14.9766 4.16016C14.9688 4.55859 14.9648 4.85938 14.9648 5.0625C13.293 4.98438 11.9141 4.94531 10.8281 4.94531H10.0078C9.89062 6.32812 9.80078 7.60547 9.73828 8.77734C9.65234 10.457 9.58594 12.0898 9.53906 13.6758C9.49219 15.2539 9.46875 16.5312 9.46875 17.5078C8.1875 17.4922 7.35938 17.4844 6.98438 17.4844C6.64844 17.4844 5.75 17.4922 4.28906 17.5078Z"
      fill={props.color ?? '#031F3A'}
    />
    <path
      d="M15.8086 17.5078L16.1719 12.3047L16.2891 9.31641C16.2969 8.77734 16.3008 8.22656 16.3008 7.66406C16.3008 7.09375 16.293 6.38672 16.2773 5.54297C17.2227 5.55859 17.9727 5.56641 18.5273 5.56641C19.1758 5.56641 19.9219 5.55859 20.7656 5.54297L20.7188 6.86719C21.0234 6.52344 21.2734 6.26953 21.4688 6.10547C21.6641 5.93359 21.8867 5.78125 22.1367 5.64844C22.3867 5.50781 22.6484 5.40625 22.9219 5.34375C23.1953 5.27344 23.4805 5.23828 23.7773 5.23828C24.0586 5.23828 24.3711 5.27734 24.7148 5.35547C24.7227 6.20703 24.7422 6.91016 24.7734 7.46484L24.8555 9.26953C24.4258 9.14453 24.0234 9.08203 23.6484 9.08203C23.1797 9.08203 22.7734 9.15234 22.4297 9.29297C22.0938 9.42578 21.793 9.63281 21.5273 9.91406C21.2695 10.1875 21.0625 10.5312 20.9062 10.9453C20.75 11.3594 20.6406 12.0156 20.5781 12.9141C20.5156 13.8125 20.4844 14.8398 20.4844 15.9961C20.4844 16.4023 20.5 16.9062 20.5312 17.5078C19.7734 17.4922 19.0117 17.4844 18.2461 17.4844C17.4883 17.4844 16.6758 17.4922 15.8086 17.5078Z"
      fill={props.color ?? '#031F3A'}
    />
    <path
      d="M27.2344 8.95312C27.3828 8.17969 27.4766 7.64844 27.5156 7.35938C27.5547 7.0625 27.6172 6.60156 27.7031 5.97656C29.9531 5.48438 31.8867 5.23828 33.5039 5.23828C34.4258 5.23828 35.2695 5.34375 36.0352 5.55469C36.8008 5.75781 37.3984 6.08984 37.8281 6.55078C38.2578 7.01172 38.4727 7.67188 38.4727 8.53125C38.4727 8.96875 38.4141 9.95312 38.2969 11.4844C38.1797 13.0156 38.0898 15.0234 38.0273 17.5078C37.2617 17.4922 36.5 17.4844 35.7422 17.4844C35.0078 17.4844 34.2266 17.4922 33.3984 17.5078C33.5078 16.6484 33.6289 14.875 33.7617 12.1875C33.4648 12.3281 33.2305 12.4297 33.0586 12.4922C32.8945 12.5547 32.6016 12.6484 32.1797 12.7734C31.7578 12.8984 31.4258 13.0039 31.1836 13.0898C30.9492 13.1758 30.7422 13.2852 30.5625 13.418C30.3906 13.5508 30.2656 13.6875 30.1875 13.8281C30.1172 13.9688 30.082 14.125 30.082 14.2969C30.082 14.5625 30.1875 14.7891 30.3984 14.9766C30.6094 15.1641 30.9453 15.2578 31.4062 15.2578C31.5703 15.2578 31.7461 15.2461 31.9336 15.2227C32.1211 15.1914 32.3789 15.1211 32.707 15.0117C32.4805 15.6133 32.2109 16.4922 31.8984 17.6484C31.2266 17.7578 30.5898 17.8125 29.9883 17.8125C29.0195 17.8125 28.2109 17.6797 27.5625 17.4141C26.9219 17.1406 26.4258 16.7031 26.0742 16.1016C25.7305 15.5 25.5586 14.8984 25.5586 14.2969C25.5586 13.9297 25.6211 13.5703 25.7461 13.2188C25.8789 12.8672 26.082 12.5234 26.3555 12.1875C26.6289 11.8516 26.9492 11.5664 27.3164 11.332C27.6836 11.0898 28.1836 10.8633 28.8164 10.6523C29.457 10.4414 30.2656 10.2422 31.2422 10.0547C31.6484 9.97656 32.0195 9.89453 32.3555 9.80859C32.6992 9.71484 32.9414 9.63672 33.082 9.57422C33.2305 9.50391 33.3477 9.42578 33.4336 9.33984C33.5273 9.24609 33.5938 9.15234 33.6328 9.05859C33.6719 8.95703 33.6914 8.85156 33.6914 8.74219C33.6914 8.44531 33.5664 8.21875 33.3164 8.0625C33.0664 7.89844 32.6992 7.81641 32.2148 7.81641C30.8711 7.81641 29.2109 8.19531 27.2344 8.95312Z"
      fill={props.color ?? '#031F3A'}
    />
    <path
      d="M40.5469 17.5078C40.7734 15.7344 40.9453 13.7773 41.0625 11.6367C41.1875 9.48828 41.2617 7.45703 41.2852 5.54297C42.2227 5.55859 43.0312 5.56641 43.7109 5.56641C44.5 5.56641 45.2578 5.55859 45.9844 5.54297L45.8672 7.13672C46.125 6.84766 46.3477 6.62109 46.5352 6.45703C46.7227 6.28516 46.9531 6.12109 47.2266 5.96484C47.5078 5.80078 47.8047 5.66797 48.1172 5.56641C48.4297 5.46484 48.7695 5.38672 49.1367 5.33203C49.5117 5.26953 49.9023 5.23828 50.3086 5.23828C50.8711 5.23828 51.418 5.30078 51.9492 5.42578C52.4883 5.54297 52.9375 5.71484 53.2969 5.94141C53.6562 6.16016 53.957 6.4375 54.1992 6.77344C54.4414 7.10156 54.6016 7.45703 54.6797 7.83984C54.7578 8.22266 54.7969 8.61719 54.7969 9.02344C54.7969 9.32031 54.7656 9.96094 54.7031 10.9453L54.5039 15.1875C54.4648 16.0234 54.4453 16.7969 54.4453 17.5078C53.6562 17.4922 52.918 17.4844 52.2305 17.4844C51.3008 17.4844 50.4531 17.4922 49.6875 17.5078C49.7578 16.7969 49.832 15.7422 49.9102 14.3438C49.9883 12.9375 50.0273 11.9492 50.0273 11.3789C50.0273 10.4961 49.8555 9.88281 49.5117 9.53906C49.1758 9.1875 48.75 9.01172 48.2344 9.01172C47.7812 9.01172 47.3516 9.16016 46.9453 9.45703C46.5469 9.75391 46.2383 10.1875 46.0195 10.7578C45.8008 11.3203 45.6445 12.25 45.5508 13.5469C45.4648 14.8438 45.4062 16.1641 45.375 17.5078C44.5938 17.4922 43.832 17.4844 43.0898 17.4844C42.3086 17.4844 41.4609 17.4922 40.5469 17.5078Z"
      fill={props.color ?? '#031F3A'}
    />
    <path
      d="M56.8828 17.2852C56.8516 16.9414 56.8203 16.582 56.7891 16.207C56.7578 15.8242 56.707 15.3008 56.6367 14.6367L56.543 13.793C57.3008 14.0898 57.9531 14.3125 58.5 14.4609C59.0469 14.6016 59.5508 14.6719 60.0117 14.6719C60.3945 14.6719 60.7031 14.6367 60.9375 14.5664C61.1797 14.4961 61.3555 14.3945 61.4648 14.2617C61.5742 14.1289 61.6289 13.9922 61.6289 13.8516C61.6289 13.7266 61.5859 13.6055 61.5 13.4883C61.4219 13.3633 61.2383 13.1953 60.9492 12.9844C60.3086 12.5156 59.7422 12.0898 59.25 11.707C58.7656 11.3242 58.3984 10.9844 58.1484 10.6875C57.9062 10.3906 57.7188 10.0703 57.5859 9.72656C57.4609 9.38281 57.3984 9.02734 57.3984 8.66016C57.3984 8.01172 57.582 7.40625 57.9492 6.84375C58.3242 6.28125 58.8711 5.875 59.5898 5.625C60.3164 5.36719 61.1992 5.23828 62.2383 5.23828C63.3242 5.23828 64.7109 5.37891 66.3984 5.66016L66.5859 8.95312C65.6406 8.57812 64.7305 8.39062 63.8555 8.39062C63.2383 8.39062 62.7891 8.45312 62.5078 8.57812C62.2344 8.70312 62.0977 8.89453 62.0977 9.15234C62.0977 9.23828 62.1133 9.32031 62.1445 9.39844C62.1758 9.47656 62.2305 9.55859 62.3086 9.64453C62.3945 9.73047 62.4961 9.82031 62.6133 9.91406C62.7383 10 63.0352 10.207 63.5039 10.5352C63.9727 10.8633 64.3398 11.1328 64.6055 11.3438C65.043 11.6875 65.375 12.0078 65.6016 12.3047C65.8359 12.5938 66.0117 12.9062 66.1289 13.2422C66.2539 13.5703 66.3164 13.918 66.3164 14.2852C66.3164 14.8398 66.1797 15.3516 65.9062 15.8203C65.6406 16.2812 65.2344 16.668 64.6875 16.9805C64.1484 17.293 63.5625 17.5078 62.9297 17.625C62.2969 17.75 61.6445 17.8125 60.9727 17.8125C60.5195 17.8125 59.9492 17.7734 59.2617 17.6953C58.582 17.6172 57.7891 17.4805 56.8828 17.2852Z"
      fill={props.color ?? '#031F3A'}
    />
    <path
      d="M69.0938 17.5078C69.2422 16.0078 69.4219 13.1406 69.6328 8.90625H68.2031C68.2266 8.66406 68.2578 8.14844 68.2969 7.35938C68.3438 6.57031 68.3711 6 68.3789 5.64844H70.043C70.0352 5.33594 70.0312 5.06641 70.0312 4.83984C70.0312 4.12109 70.0664 3.55859 70.1367 3.15234C70.2148 2.74609 70.3516 2.40234 70.5469 2.12109C70.75 1.83203 71.0312 1.57812 71.3906 1.35938C71.7578 1.13281 72.168 0.980469 72.6211 0.902344C73.082 0.824219 73.5586 0.785156 74.0508 0.785156C74.5039 0.785156 74.9922 0.816406 75.5156 0.878906C76.0469 0.933594 76.6797 1.05859 77.4141 1.25391C77.4375 2.49609 77.4883 3.52734 77.5664 4.34766C76.793 4.06641 76.0977 3.92578 75.4805 3.92578C75.0586 3.92578 74.7266 4.02344 74.4844 4.21875C74.25 4.41406 74.1328 4.77344 74.1328 5.29688L74.1445 5.64844H76.8398C76.7773 6.54688 76.7148 7.63281 76.6523 8.90625H74.2148L73.8281 17.5078C72.8984 17.4922 72.1016 17.4844 71.4375 17.4844C70.7656 17.4844 69.9844 17.4922 69.0938 17.5078Z"
      fill={props.color ?? '#031F3A'}
    />
    <path
      d="M89.6953 13.9688C89.5938 14.4375 89.3984 15.5703 89.1094 17.3672C88.2031 17.5469 87.4414 17.6641 86.8242 17.7188C86.207 17.7812 85.582 17.8125 84.9492 17.8125C84.0195 17.8125 83.1641 17.7461 82.3828 17.6133C81.6016 17.4883 80.9258 17.2617 80.3555 16.9336C79.793 16.6055 79.3203 16.1992 78.9375 15.7148C78.5547 15.2227 78.2617 14.6406 78.0586 13.9688C77.8633 13.2969 77.7656 12.6055 77.7656 11.8945C77.7656 10.8945 77.9648 9.91797 78.3633 8.96484C78.7617 8.00391 79.2734 7.25391 79.8984 6.71484C80.5312 6.17578 81.2578 5.79297 82.0781 5.56641C82.8984 5.33984 83.7383 5.22656 84.5977 5.22656C85.4883 5.22656 86.3359 5.33203 87.1406 5.54297C87.9531 5.74609 88.6406 6.10547 89.2031 6.62109C89.7656 7.13672 90.1641 7.71875 90.3984 8.36719C90.6406 9.01562 90.7617 9.71484 90.7617 10.4648C90.7617 10.9102 90.7109 11.4062 90.6094 11.9531L82.3945 11.9648C82.3867 12.0898 82.3828 12.2031 82.3828 12.3047C82.3828 13.1484 82.6836 13.7695 83.2852 14.168C83.8867 14.5664 84.6211 14.7656 85.4883 14.7656C86.0039 14.7656 86.5898 14.707 87.2461 14.5898C87.9102 14.4648 88.7266 14.2578 89.6953 13.9688ZM82.4883 10.1719H86.3555C86.3633 10.0391 86.3672 9.92578 86.3672 9.83203C86.3672 9.42578 86.293 9.07812 86.1445 8.78906C86.0039 8.5 85.7969 8.28906 85.5234 8.15625C85.2578 8.02344 84.957 7.95703 84.6211 7.95703C84.3867 7.95703 84.1602 7.99609 83.9414 8.07422C83.7227 8.14453 83.5234 8.25391 83.3438 8.40234C83.1719 8.54297 83.0273 8.70703 82.9102 8.89453C82.793 9.08203 82.707 9.26562 82.6523 9.44531C82.5977 9.61719 82.543 9.85938 82.4883 10.1719Z"
      fill={props.color ?? '#031F3A'}
    />
    <path
      d="M92.2852 17.5078L92.6484 12.3047L92.7656 9.31641C92.7734 8.77734 92.7773 8.22656 92.7773 7.66406C92.7773 7.09375 92.7695 6.38672 92.7539 5.54297C93.6992 5.55859 94.4492 5.56641 95.0039 5.56641C95.6523 5.56641 96.3984 5.55859 97.2422 5.54297L97.1953 6.86719C97.5 6.52344 97.75 6.26953 97.9453 6.10547C98.1406 5.93359 98.3633 5.78125 98.6133 5.64844C98.8633 5.50781 99.125 5.40625 99.3984 5.34375C99.6719 5.27344 99.957 5.23828 100.254 5.23828C100.535 5.23828 100.848 5.27734 101.191 5.35547C101.199 6.20703 101.219 6.91016 101.25 7.46484L101.332 9.26953C100.902 9.14453 100.5 9.08203 100.125 9.08203C99.6562 9.08203 99.25 9.15234 98.9062 9.29297C98.5703 9.42578 98.2695 9.63281 98.0039 9.91406C97.7461 10.1875 97.5391 10.5312 97.3828 10.9453C97.2266 11.3594 97.1172 12.0156 97.0547 12.9141C96.9922 13.8125 96.9609 14.8398 96.9609 15.9961C96.9609 16.4023 96.9766 16.9062 97.0078 17.5078C96.25 17.4922 95.4883 17.4844 94.7227 17.4844C93.9648 17.4844 93.1523 17.4922 92.2852 17.5078Z"
      fill={props.color ?? '#031F3A'}
    />
    <path
      d="M101.637 22.8633C101.395 20.9961 101.23 19.8359 101.145 19.3828C101.637 19.6172 102.07 19.7773 102.445 19.8633C102.828 19.9492 103.156 19.9922 103.43 19.9922C103.719 19.9922 103.988 19.9531 104.238 19.875C104.496 19.7969 104.699 19.6992 104.848 19.582C104.996 19.4727 105.156 19.3008 105.328 19.0664C105.508 18.832 105.641 18.6289 105.727 18.457C105.812 18.293 105.898 18.0547 105.984 17.7422L103.781 11.0742L101.895 5.54297C103.059 5.55859 103.875 5.56641 104.344 5.56641C104.891 5.56641 105.637 5.55859 106.582 5.54297C106.73 6.14453 107.004 7.18359 107.402 8.66016C107.809 10.1367 108.102 11.293 108.281 12.1289C108.383 12.5898 108.48 13.1758 108.574 13.8867L108.82 12.9492C108.898 12.6992 108.988 12.4141 109.09 12.0938C109.191 11.7734 109.32 11.3906 109.477 10.9453L110.238 8.8125L111.504 5.54297C112.48 5.55859 113.219 5.56641 113.719 5.56641C114.156 5.56641 114.938 5.55859 116.062 5.54297L113.801 10.6523L109.711 20.1328C109.445 20.6641 109.191 21.0859 108.949 21.3984C108.723 21.6797 108.477 21.9258 108.211 22.1367C107.961 22.332 107.691 22.4961 107.402 22.6289C107.012 22.8086 106.582 22.9492 106.113 23.0508C105.598 23.1602 105.074 23.2148 104.543 23.2148C104.301 23.2148 103.98 23.1953 103.582 23.1562C103.184 23.125 102.859 23.0898 102.609 23.0508C102.367 23.0195 102.043 22.957 101.637 22.8633Z"
      fill={props.color ?? '#031F3A'}
    />
  </svg>
);

export default memo(TransferyLogo);
