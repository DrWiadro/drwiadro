function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.goskope.com") ||
        shExpMatch(host, "163.116.*") ||
        isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }
    
    return "HTTPS eproxy-*****.goskope.com:443";
}


