function FindProxyForURL(url, host) {
    // For pure testing — proxy EVERYTHING (including goskope domains)
    return "HTTPS eproxy-testeuroclear.goskope.com:443";
}
