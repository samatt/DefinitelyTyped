declare module "constants" {
    const E2BIG: number;
    const EACCES: number;
    const EADDRINUSE: number;
    const EADDRNOTAVAIL: number;
    const EAFNOSUPPORT: number;
    const EAGAIN: number;
    const EALREADY: number;
    const EBADF: number;
    const EBADMSG: number;
    const EBUSY: number;
    const ECANCELED: number;
    const ECHILD: number;
    const ECONNABORTED: number;
    const ECONNREFUSED: number;
    const ECONNRESET: number;
    const EDEADLK: number;
    const EDESTADDRREQ: number;
    const EDOM: number;
    const EEXIST: number;
    const EFAULT: number;
    const EFBIG: number;
    const EHOSTUNREACH: number;
    const EIDRM: number;
    const EILSEQ: number;
    const EINPROGRESS: number;
    const EINTR: number;
    const EINVAL: number;
    const EIO: number;
    const EISCONN: number;
    const EISDIR: number;
    const ELOOP: number;
    const EMFILE: number;
    const EMLINK: number;
    const EMSGSIZE: number;
    const ENAMETOOLONG: number;
    const ENETDOWN: number;
    const ENETRESET: number;
    const ENETUNREACH: number;
    const ENFILE: number;
    const ENOBUFS: number;
    const ENODATA: number;
    const ENODEV: number;
    const ENOENT: number;
    const ENOEXEC: number;
    const ENOLCK: number;
    const ENOLINK: number;
    const ENOMEM: number;
    const ENOMSG: number;
    const ENOPROTOOPT: number;
    const ENOSPC: number;
    const ENOSR: number;
    const ENOSTR: number;
    const ENOSYS: number;
    const ENOTCONN: number;
    const ENOTDIR: number;
    const ENOTEMPTY: number;
    const ENOTSOCK: number;
    const ENOTSUP: number;
    const ENOTTY: number;
    const ENXIO: number;
    const EOPNOTSUPP: number;
    const EOVERFLOW: number;
    const EPERM: number;
    const EPIPE: number;
    const EPROTO: number;
    const EPROTONOSUPPORT: number;
    const EPROTOTYPE: number;
    const ERANGE: number;
    const EROFS: number;
    const ESPIPE: number;
    const ESRCH: number;
    const ETIME: number;
    const ETIMEDOUT: number;
    const ETXTBSY: number;
    const EWOULDBLOCK: number;
    const EXDEV: number;
    const WSAEINTR: number;
    const WSAEBADF: number;
    const WSAEACCES: number;
    const WSAEFAULT: number;
    const WSAEINVAL: number;
    const WSAEMFILE: number;
    const WSAEWOULDBLOCK: number;
    const WSAEINPROGRESS: number;
    const WSAEALREADY: number;
    const WSAENOTSOCK: number;
    const WSAEDESTADDRREQ: number;
    const WSAEMSGSIZE: number;
    const WSAEPROTOTYPE: number;
    const WSAENOPROTOOPT: number;
    const WSAEPROTONOSUPPORT: number;
    const WSAESOCKTNOSUPPORT: number;
    const WSAEOPNOTSUPP: number;
    const WSAEPFNOSUPPORT: number;
    const WSAEAFNOSUPPORT: number;
    const WSAEADDRINUSE: number;
    const WSAEADDRNOTAVAIL: number;
    const WSAENETDOWN: number;
    const WSAENETUNREACH: number;
    const WSAENETRESET: number;
    const WSAECONNABORTED: number;
    const WSAECONNRESET: number;
    const WSAENOBUFS: number;
    const WSAEISCONN: number;
    const WSAENOTCONN: number;
    const WSAESHUTDOWN: number;
    const WSAETOOMANYREFS: number;
    const WSAETIMEDOUT: number;
    const WSAECONNREFUSED: number;
    const WSAELOOP: number;
    const WSAENAMETOOLONG: number;
    const WSAEHOSTDOWN: number;
    const WSAEHOSTUNREACH: number;
    const WSAENOTEMPTY: number;
    const WSAEPROCLIM: number;
    const WSAEUSERS: number;
    const WSAEDQUOT: number;
    const WSAESTALE: number;
    const WSAEREMOTE: number;
    const WSASYSNOTREADY: number;
    const WSAVERNOTSUPPORTED: number;
    const WSANOTINITIALISED: number;
    const WSAEDISCON: number;
    const WSAENOMORE: number;
    const WSAECANCELLED: number;
    const WSAEINVALIDPROCTABLE: number;
    const WSAEINVALIDPROVIDER: number;
    const WSAEPROVIDERFAILEDINIT: number;
    const WSASYSCALLFAILURE: number;
    const WSASERVICE_NOT_FOUND: number;
    const WSATYPE_NOT_FOUND: number;
    const WSA_E_NO_MORE: number;
    const WSA_E_CANCELLED: number;
    const WSAEREFUSED: number;
    const SIGHUP: number;
    const SIGINT: number;
    const SIGILL: number;
    const SIGABRT: number;
    const SIGFPE: number;
    const SIGKILL: number;
    const SIGSEGV: number;
    const SIGTERM: number;
    const SIGBREAK: number;
    const SIGWINCH: number;
    const SSL_OP_ALL: number;
    const SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
    const SSL_OP_CIPHER_SERVER_PREFERENCE: number;
    const SSL_OP_CISCO_ANYCONNECT: number;
    const SSL_OP_COOKIE_EXCHANGE: number;
    const SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
    const SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
    const SSL_OP_EPHEMERAL_RSA: number;
    const SSL_OP_LEGACY_SERVER_CONNECT: number;
    const SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
    const SSL_OP_MICROSOFT_SESS_ID_BUG: number;
    const SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
    const SSL_OP_NETSCAPE_CA_DN_BUG: number;
    const SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
    const SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
    const SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
    const SSL_OP_NO_COMPRESSION: number;
    const SSL_OP_NO_QUERY_MTU: number;
    const SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
    const SSL_OP_NO_SSLv2: number;
    const SSL_OP_NO_SSLv3: number;
    const SSL_OP_NO_TICKET: number;
    const SSL_OP_NO_TLSv1: number;
    const SSL_OP_NO_TLSv1_1: number;
    const SSL_OP_NO_TLSv1_2: number;
    const SSL_OP_PKCS1_CHECK_1: number;
    const SSL_OP_PKCS1_CHECK_2: number;
    const SSL_OP_SINGLE_DH_USE: number;
    const SSL_OP_SINGLE_ECDH_USE: number;
    const SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
    const SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
    const SSL_OP_TLS_BLOCK_PADDING_BUG: number;
    const SSL_OP_TLS_D5_BUG: number;
    const SSL_OP_TLS_ROLLBACK_BUG: number;
    const ENGINE_METHOD_DSA: number;
    const ENGINE_METHOD_DH: number;
    const ENGINE_METHOD_RAND: number;
    const ENGINE_METHOD_ECDH: number;
    const ENGINE_METHOD_ECDSA: number;
    const ENGINE_METHOD_CIPHERS: number;
    const ENGINE_METHOD_DIGESTS: number;
    const ENGINE_METHOD_STORE: number;
    const ENGINE_METHOD_PKEY_METHS: number;
    const ENGINE_METHOD_PKEY_ASN1_METHS: number;
    const ENGINE_METHOD_ALL: number;
    const ENGINE_METHOD_NONE: number;
    const DH_CHECK_P_NOT_SAFE_PRIME: number;
    const DH_CHECK_P_NOT_PRIME: number;
    const DH_UNABLE_TO_CHECK_GENERATOR: number;
    const DH_NOT_SUITABLE_GENERATOR: number;
    const NPN_ENABLED: number;
    const RSA_PKCS1_PADDING: number;
    const RSA_SSLV23_PADDING: number;
    const RSA_NO_PADDING: number;
    const RSA_PKCS1_OAEP_PADDING: number;
    const RSA_X931_PADDING: number;
    const RSA_PKCS1_PSS_PADDING: number;
    const POINT_CONVERSION_COMPRESSED: number;
    const POINT_CONVERSION_UNCOMPRESSED: number;
    const POINT_CONVERSION_HYBRID: number;
    const O_RDONLY: number;
    const O_WRONLY: number;
    const O_RDWR: number;
    const S_IFMT: number;
    const S_IFREG: number;
    const S_IFDIR: number;
    const S_IFCHR: number;
    const S_IFBLK: number;
    const S_IFIFO: number;
    const S_IFSOCK: number;
    const S_IRWXU: number;
    const S_IRUSR: number;
    const S_IWUSR: number;
    const S_IXUSR: number;
    const S_IRWXG: number;
    const S_IRGRP: number;
    const S_IWGRP: number;
    const S_IXGRP: number;
    const S_IRWXO: number;
    const S_IROTH: number;
    const S_IWOTH: number;
    const S_IXOTH: number;
    const S_IFLNK: number;
    const O_CREAT: number;
    const O_EXCL: number;
    const O_NOCTTY: number;
    const O_DIRECTORY: number;
    const O_NOATIME: number;
    const O_NOFOLLOW: number;
    const O_SYNC: number;
    const O_DSYNC: number;
    const O_SYMLINK: number;
    const O_DIRECT: number;
    const O_NONBLOCK: number;
    const O_TRUNC: number;
    const O_APPEND: number;
    const F_OK: number;
    const R_OK: number;
    const W_OK: number;
    const X_OK: number;
    const COPYFILE_EXCL: number;
    const COPYFILE_FICLONE: number;
    const COPYFILE_FICLONE_FORCE: number;
    const UV_UDP_REUSEADDR: number;
    const SIGQUIT: number;
    const SIGTRAP: number;
    const SIGIOT: number;
    const SIGBUS: number;
    const SIGUSR1: number;
    const SIGUSR2: number;
    const SIGPIPE: number;
    const SIGALRM: number;
    const SIGCHLD: number;
    const SIGSTKFLT: number;
    const SIGCONT: number;
    const SIGSTOP: number;
    const SIGTSTP: number;
    const SIGTTIN: number;
    const SIGTTOU: number;
    const SIGURG: number;
    const SIGXCPU: number;
    const SIGXFSZ: number;
    const SIGVTALRM: number;
    const SIGPROF: number;
    const SIGIO: number;
    const SIGPOLL: number;
    const SIGPWR: number;
    const SIGSYS: number;
    const SIGUNUSED: number;
    const defaultCoreCipherList: string;
    const defaultCipherList: string;
    const ENGINE_METHOD_RSA: number;
    const ALPN_ENABLED: number;
}
