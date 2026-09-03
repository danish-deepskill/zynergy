"""Generate the bilingual Zynergy Supply company profile PDF."""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table,
    TableStyle, Image, NextPageTemplate, PageBreak,
)

STEEL = HexColor("#1c2530")
STEEL_LIGHT = HexColor("#2b3644")
AMBER = HexColor("#f59e0b")
INK = HexColor("#0f1b33")
MUTED = HexColor("#55617a")
LINE = HexColor("#e6eaf2")
BLUE = HexColor("#2563eb")
SOFT = HexColor("#f4f7fb")

W, H = A4
M = 16 * mm
HEADER_H = 26 * mm
FOOTER_H = 14 * mm

OUT = "/home/danish/projects/zynergy/public/docs/zynergy-supply-company-profile.pdf"
CLIENTS_DIR = "/home/danish/projects/zynergy/public/clients"

clients = [
    "freeport-indonesia.png", "merdeka-copper-gold.png", "cogindo.png",
    "trakindo.png", "sorikmas-mining.png", "gunung-madu.png", "trinitan.png",
    "hyundai-enc.png", "brunel.png", "fluor-petrosea.png",
    "suprabakti-mandiri.png", "witteveen-bos.png", "indoshe.png",
]

brands = ("Schneider Electric · Cisco · Commscope · Lantronix · Panduit · Netviel · "
          "Optibelt · Gates · Bando · Phoenix Contact · Nipress · Martindale")

CONTACT = "Jl. Lapangan Tembak No. 1, Cilandak Timur, Jakarta Selatan 12560  ·  halo@zynergy.co.id  ·  zynergy.co.id"


def header_footer(lang):
    def draw(canvas, doc):
        canvas.saveState()
        # Header band
        canvas.setFillColor(STEEL)
        canvas.rect(0, H - HEADER_H, W, HEADER_H, stroke=0, fill=1)
        # Z mark
        size = 9 * mm
        x, y = M, H - HEADER_H / 2 - size / 2
        canvas.setFillColor(BLUE)
        canvas.roundRect(x, y, size, size, 2.2 * mm, stroke=0, fill=1)
        canvas.setFillColor(HexColor("#ffffff"))
        canvas.setFont("Helvetica-Bold", 15)
        canvas.drawCentredString(x + size / 2, y + 2.4 * mm, "Z")
        canvas.setFont("Helvetica-Bold", 16)
        canvas.drawString(x + size + 4 * mm, H - HEADER_H / 2 + 0.6 * mm, "Zynergy Supply")
        canvas.setFillColor(AMBER)
        canvas.setFont("Helvetica-Bold", 8)
        label = "PROFIL PERUSAHAAN" if lang == "id" else "COMPANY PROFILE"
        canvas.drawString(x + size + 4 * mm, H - HEADER_H / 2 - 4.2 * mm, label)
        canvas.setFillColor(HexColor("#aeb9c9"))
        canvas.setFont("Helvetica", 9)
        canvas.drawRightString(W - M, H - HEADER_H / 2 + 0.6 * mm, "PT Sinergi Mitra Abadi Jaya")
        canvas.setFont("Helvetica", 8)
        canvas.drawRightString(W - M, H - HEADER_H / 2 - 4.2 * mm,
                               "Sejak 2008" if lang == "id" else "Since 2008")
        # Footer
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.6)
        canvas.line(M, FOOTER_H, W - M, FOOTER_H)
        canvas.setFillColor(MUTED)
        canvas.setFont("Helvetica", 7.5)
        canvas.drawString(M, FOOTER_H - 4 * mm, CONTACT)
        canvas.drawRightString(W - M, FOOTER_H - 4 * mm,
                               "Bahasa Indonesia · 1/2" if lang == "id" else "English · 2/2")
        canvas.restoreState()
    return draw


def styles():
    base = dict(fontName="Helvetica", textColor=INK, leading=13)
    return {
        "h": ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=12.5, leading=15,
                            textColor=STEEL, spaceBefore=11, spaceAfter=4),
        "body": ParagraphStyle("body", fontSize=9.3, **base),
        "cat_t": ParagraphStyle("cat_t", fontName="Helvetica-Bold", fontSize=9.3,
                                leading=12, textColor=INK),
        "cat_x": ParagraphStyle("cat_x", fontName="Helvetica", fontSize=8.2,
                                leading=10.5, textColor=MUTED),
        "small": ParagraphStyle("small", fontName="Helvetica", fontSize=8.6,
                                leading=11.5, textColor=MUTED, alignment=TA_LEFT),
        "step_t": ParagraphStyle("step_t", fontName="Helvetica-Bold", fontSize=9.3,
                                 leading=12, textColor=INK),
    }


def logo_grid():
    cols = 5
    cell_w = (W - 2 * M - 8 * mm) / cols
    imgs = []
    for f in clients:
        path = os.path.join(CLIENTS_DIR, f)
        iw, ih = ImageReader(path).getSize()
        h = 7.5 * mm
        w = min(iw * h / ih, cell_w - 4 * mm)
        imgs.append(Image(path, width=w, height=ih * w / iw if iw * h / ih > cell_w - 4 * mm else h))
    rows = [imgs[i:i + cols] for i in range(0, len(imgs), cols)]
    while len(rows[-1]) < cols:
        rows[-1].append("")
    t = Table(rows, colWidths=[cell_w + 8 * mm / cols] * cols, rowHeights=11 * mm)
    t.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    return t


def categories_table(items, st):
    cells, row = [], []
    for title, examples in items:
        inner = [[Paragraph(title, st["cat_t"])], [Paragraph(examples, st["cat_x"])]]
        it = Table(inner, colWidths=[(W - 2 * M - 6 * mm) / 2 - 6 * mm])
        it.setStyle(TableStyle([
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 0.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
        ]))
        row.append(it)
        if len(row) == 2:
            cells.append(row)
            row = []
    if row:
        row.append("")
        cells.append(row)
    t = Table(cells, colWidths=[(W - 2 * M - 6 * mm) / 2 + 3 * mm] * 2)
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LINEBELOW", (0, 0), (-1, -2), 0.5, LINE),
    ]))
    return t


def steps_table(steps, st):
    rows = []
    for i, (t_, d) in enumerate(steps, 1):
        num = Paragraph(f'<font color="#ffffff"><b>{i}</b></font>',
                        ParagraphStyle("n", alignment=1, fontSize=9))
        rows.append([num, Paragraph(f"<b>{t_}:</b> {d}", st["small"])])
    t = Table(rows, colWidths=[8 * mm, W - 2 * M - 8 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, -1), AMBER),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (0, -1), "CENTER"),
        ("TOPPADDING", (0, 0), (-1, -1), 3.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5),
    ]))
    return t


def identity_table(rows, st):
    data = [[Paragraph(f"<b>{k}</b>", st["small"]), Paragraph(v, st["body"])] for k, v in rows]
    t = Table(data, colWidths=[38 * mm, W - 2 * M - 38 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), SOFT),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("LINEBELOW", (0, 0), (-1, -2), 0.5, HexColor("#ffffff")),
    ]))
    return t


st = styles()

ID_CATS = [
    ("Networking & Konektivitas", "SFP & GLC transceiver, Lantronix device server, Cisco access point"),
    ("Structured Cabling", "Commscope CAT6A, Netviel fiber optic, Panduit, First Cable"),
    ("Kelistrikan", "MCB Schneider, panel box, kabel N2XY/NYY, Phoenix Contact"),
    ("MRO & Spare Part", "V-belt & timing belt Bando, Optibelt, Gates; alat ukur Martindale"),
    ("Mining & Site Support", "Drilling support, chemical & water treatment, baterai industri Nipress"),
    ("Custom Fabrication", "Peralatan custom sesuai spesifikasi, contoh: custom cable winder"),
]
EN_CATS = [
    ("Networking & Connectivity", "SFP & GLC transceivers, Lantronix device servers, Cisco access points"),
    ("Structured Cabling", "Commscope CAT6A, Netviel fiber optics, Panduit, First Cable"),
    ("Electrical", "Schneider MCBs, panel boxes, N2XY/NYY cables, Phoenix Contact"),
    ("MRO & Spare Parts", "Bando, Optibelt, Gates V-belts & timing belts; Martindale test equipment"),
    ("Mining & Site Support", "Drilling support, chemical & water treatment, Nipress industrial batteries"),
    ("Custom Fabrication", "Bespoke equipment built to specification, e.g. custom cable winders"),
]
ID_STEPS = [
    ("Terima SR / RFQ", "kirim service request atau daftar kebutuhan lengkap dengan spesifikasi."),
    ("Sourcing & Penawaran", "kami cari barang sesuai part number, domestik maupun impor, lalu ajukan penawaran kompetitif."),
    ("Pengiriman & Dokumen", "barang dikirim tepat waktu ke site, lengkap dengan invoice dan dokumen pendukung."),
]
EN_STEPS = [
    ("Receive SR / RFQ", "send a service request or a complete list of requirements with specifications."),
    ("Sourcing & Quotation", "we source by exact part number, domestically or via import, and submit a competitive quotation."),
    ("Delivery & Documents", "goods delivered to site on time, complete with invoice and supporting documents."),
]
ID_ROWS = [
    ("Nama perusahaan", "PT Sinergi Mitra Abadi Jaya"),
    ("Berdiri", "2008"),
    ("Alamat", "Jl. Lapangan Tembak No. 1, Cilandak Timur, Jakarta Selatan 12560"),
    ("Email", "halo@zynergy.co.id"),
]
EN_ROWS = [
    ("Company name", "PT Sinergi Mitra Abadi Jaya"),
    ("Established", "2008"),
    ("Address", "Jl. Lapangan Tembak No. 1, Cilandak Timur, Jakarta Selatan 12560"),
    ("Email", "halo@zynergy.co.id"),
]

ID_ABOUT = ("Sejak 2008, PT Sinergi Mitra Abadi Jaya memasok komponen jaringan, kelistrikan, dan "
            "infrastruktur untuk industri pertambangan dan manufaktur di Indonesia. Penawaran kami "
            "berbasis SR/RFQ, sesuai spesifikasi dan part number, dengan pengiriman tepat waktu. "
            "Sourcing dilakukan secara domestik maupun impor, didukung jaringan supplier di Amerika "
            "Serikat, Inggris, dan Singapura. Zynergy Supply adalah lini pengadaan barang dari grup Zynergy.")
EN_ABOUT = ("Since 2008, PT Sinergi Mitra Abadi Jaya has supplied networking, electrical, and "
            "infrastructure components to Indonesia's mining and manufacturing industries. We quote "
            "against SRs/RFQs to exact specifications and part numbers, delivered on time. Sourcing is "
            "both domestic and international, supported by supplier networks in the United States, the "
            "United Kingdom, and Singapore. Zynergy Supply is the industrial procurement line of the Zynergy group.")

doc = BaseDocTemplate(OUT, pagesize=A4, leftMargin=M, rightMargin=M,
                      topMargin=HEADER_H + 6 * mm, bottomMargin=FOOTER_H + 5 * mm,
                      title="Zynergy Supply — Company Profile",
                      author="PT Sinergi Mitra Abadi Jaya")
frame = Frame(M, FOOTER_H + 5 * mm, W - 2 * M, H - HEADER_H - FOOTER_H - 11 * mm, id="f")
doc.addPageTemplates([
    PageTemplate(id="id", frames=[frame], onPage=header_footer("id")),
    PageTemplate(id="en", frames=[frame], onPage=header_footer("en")),
])

story = []
# ---------- Page 1: Indonesian ----------
story.append(Paragraph("Tentang Kami", st["h"]))
story.append(Paragraph(ID_ABOUT, st["body"]))
story.append(Paragraph("Kategori Supply", st["h"]))
story.append(categories_table(ID_CATS, st))
story.append(Paragraph("Brand yang Pernah Kami Pasok", st["h"]))
story.append(Paragraph(brands, st["small"]))
story.append(Paragraph("Dipercaya Oleh", st["h"]))
story.append(logo_grid())
story.append(Paragraph("Cara Kerja Pengadaan", st["h"]))
story.append(steps_table(ID_STEPS, st))
story.append(Paragraph("Informasi Perusahaan", st["h"]))
story.append(identity_table(ID_ROWS, st))
story.append(Spacer(1, 3 * mm))
story.append(Paragraph("Dokumen legalitas lengkap tersedia untuk kebutuhan registrasi vendor.", st["small"]))

story.append(NextPageTemplate("en"))
story.append(PageBreak())

# ---------- Page 2: English ----------
story.append(Paragraph("About Us", st["h"]))
story.append(Paragraph(EN_ABOUT, st["body"]))
story.append(Paragraph("Supply Categories", st["h"]))
story.append(categories_table(EN_CATS, st))
story.append(Paragraph("Brands We Have Supplied", st["h"]))
story.append(Paragraph(brands, st["small"]))
story.append(Paragraph("Trusted By", st["h"]))
story.append(logo_grid())
story.append(Paragraph("How Procurement Works", st["h"]))
story.append(steps_table(EN_STEPS, st))
story.append(Paragraph("Company Information", st["h"]))
story.append(identity_table(EN_ROWS, st))
story.append(Spacer(1, 3 * mm))
story.append(Paragraph("Complete legal documents are available for vendor registration purposes.", st["small"]))

os.makedirs(os.path.dirname(OUT), exist_ok=True)
doc.build(story)
print("wrote", OUT, os.path.getsize(OUT) // 1024, "KB")
