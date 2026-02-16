function FindProxyForURL(url, host) {
    // For pure testing — proxy EVERYTHING (including goskope domains)
    return "PROXY eproxy-testeuroclear.goskope.com:443";
}

