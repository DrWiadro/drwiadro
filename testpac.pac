function FindProxyForURL(url, host) {
    // Bypass Netskope domains and local/private IPs
    if (shExpMatch(host, "*.goskope.com") ||
        shExpMatch(host, "163.116.*") ||
        isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }
    
    // Proxy everything else via eproxy with mTLS (HTTPS proxy type)
    return "HTTPS eproxy-testeuroclear.goskope.com:443";
}
