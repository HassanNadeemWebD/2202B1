<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h2>My Stores Collection</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Name</th>
                        <th>Owner</th>
                        <th>Adress</th>
                        <th>Product</th>
                    </tr>
                    <xsl:for-each select="stores/store">
                        <tr>
                            <td>
                                <xsl:value-of select="name" />
                            </td>
                            <td>
                                <xsl:value-of select="owner" />
                            </td>
                            <td>
                                <xsl:value-of select="address" />
                            </td>
                            <td>
                                <xsl:value-of select="product" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>