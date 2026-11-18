# KAPAHyperPrepKitwithRiboEraseProtocol.pdf
URL: https://genome.med.harvard.edu/documents/libraryPrep/KAPAHyperPrepKitwithRiboEraseProtocol.pdf
Technical Data Sheet 
Effective date: October 2016  For Research Use Only. Not for use in diagnostic procedures. KAPA RNA HyperPrep Kit with 
# RiboErase (HMR) 
# Illumina ® Platforms 
KR1351 – v1.16 
This Technical Data Sheet provides product information 
and a detailed protocol for the KAPA RNA HyperPrep 
Kit with RiboErase (HMR or Human/Mouse/Rat) for 
Illumina Platforms. 
Contents 
Product Description  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
Product Applications  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  2
Product Specifications  . . . . . . . . . . . . . . . . . . . . . . . . . .  3
Shipping and Storage  . . . . . . . . . . . . . . . . . . . . . . . .  3
Handling  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  3
Quality Control  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  3
Important Parameters  . . . . . . . . . . . . . . . . . . . . . . . . . .  4
Input RNA Requirements . . . . . . . . . . . . . . . . . . . . . . . . .  4
RNA Handling  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  4
RNA Fragmentation  . . . . . . . . . . . . . . . . . . . . . . . . . .  4
Safe Stopping Points  . . . . . . . . . . . . . . . . . . . . . . . . .  5
Reaction Setup  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  5
Reaction Cleanups  . . . . . . . . . . . . . . . . . . . . . . . . . . .  5
Adapter Design and Concentration  . . . . . . . . . . . . . .  6
Library Amplification . . . . . . . . . . . . . . . . . . . . . . . . . .  6
Evaluating the Success of Library Construction  . . . .  7
Process Workflow  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  8
Library Construction Protocol  . . . . . . . . . . . . . . . . . . .  9
Appendix: Library Size 
Distribution Optimization  . . . . . . . . . . . . . . . . . . . . . .  16 
Restrictions and Liabilities . . . . . . . . . . . . . . . . . . . . . . .  20 
Note to Purchaser: Limited Product Warranty  . . . . . . .  20 
Note to Purchaser: Limited License  . . . . . . . . . . . . . . .  20 
Kapa/ Roche  Kit Codes and Components 
KK8560 
> 08098131702
24 libraries 
Hybridization Buffer 
Hybridization Oligos (HMR) 
Depletion Buffer 
RNase H 
DNase Buffer 
DNase 
Fragment, Prime and Elute Buffer (2X) 
1st Strand Synthesis Buffer 
KAPA Script 
2nd Strand Marking Buffer 
2nd Strand Synthesis & A-Tailing 
Enzyme Mix 
Ligation Buffer 
DNA Ligase 
PEG/NaCl Solution 
KAPA Pure Beads (2 bottles) 
Library Amplification Primer Mix (10X) 
KAPA HiFi HotStart ReadyMix (2X) 
110  μL 
110  μL 
80  μL 
55  μL 
60  μL 
55  μL 
300  μL 
300  μL 
25  μL 
780  μL 
50  μL 
1 mL 
280  μL 
1 mL 
6.4  mL 
138  μL 
690  μL 
KK8561 
> 08098140702
96 libraries 
Hybridization Buffer 
Hybridization Oligos (HMR) 
Depletion Buffer 
RNase H 
DNase Buffer 
DNase 
Fragment, Prime and Elute Buffer (2X) 
1st Strand Synthesis Buffer 
KAPA Script 
2nd Strand Marking Buffer 
2nd Strand Synthesis & A-Tailing 
Enzyme Mix 
Ligation Buffer 
DNA Ligase 
PEG/NaCl Solution 
KAPA Pure Beads 
Library Amplification Primer Mix (10X) 
KAPA HiFi HotStart ReadyMix (2X) 
480  μL 
480  μL 
360  μL 
240  μL 
264  μL 
240  μL 
1.4  mL 
1.4  mL 
130  μL 
3.8  mL 
250  μL 
5 mL 
1.26  mL 
5 mL 
30  mL 
600  μL 
3 mL 
Quick Notes 
• Rapid and easily automatable protocol enables 
stranded RNA library construction in approximately 
6.5  hrs. 
• This protocol is suitable for the depletion of 
ribosomal RNA (rRNA) from 25  ng  – 1 μg of purified 
total human, mouse, or rat RNA (HMR). 
• Suitable for high- and low-quality RNA samples, 
including FFPE. Results may vary depending on the 
input amount and quality. 
• Accurate strand origin information maintained using 
dUTP incorporation during 2nd strand synthesis. 
• This kit contains KAPA Pure Beads for reaction 
cleanups, along with all reagents needed for library 
construction and high-efficiency, low-bias library 
amplification, except for adapters. KAPA Adapters 
are sold separately. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 2 For Research Use Only. Not for use in diagnostic procedures. 
Product Description 
The KAPA RNA HyperPrep Kit with RiboErase (HMR) for 
Illumina sequencing contains all of the buffers and enzymes 
required for depletion of ribosomal RNA (rRNA) and the 
rapid construction of stranded RNA-Seq libraries from 
25  ng  – 1 μg of purified total RNA via the following steps: 
1.  depletion of rRNA by hybridization of complementary 
DNA oligonucleotides, followed by treatment with 
RNase H and DNase to remove rRNA duplexed to DNA 
and original DNA oligonucleotides, respectively; 
2.  fragmentation using heat and magnesium; 
3.  1st strand cDNA synthesis using random priming; 
4.  combined 2nd strand synthesis and A-tailing, which 
converts the cDNA:RNA hybrid to double-stranded 
cDNA (dscDNA), incorporates dUTP into the second 
cDNA strand for stranded RNA sequencing, and adds 
dAMP to the 3' ends of the resulting dscDNA; 
5.  adapter ligation, where dsDNA adapters with 3' dTMP 
overhangs are ligated to library insert fragments; and 
6.  library amplification, to amplify library fragments carrying 
appropriate adapter sequences at both ends using high-
fidelity, low-bias PCR. The strand marked with dUTP is 
not amplified, allowing strand-specific sequencing. 
The kit provides KAPA Pure Beads for reaction cleanups, 
along with all of the enzymes and buffers required for 
rRNA depletion, cDNA synthesis, library construction 
and amplification, but does not include RNA or adapters. 
KAPA Adapters are sold separately. 
Reaction buffers are supplied in convenient formats 
comprising all of the required reaction components. 
This minimizes the risk of RNase contamination, ensures 
consistent and homogenous reaction composition, and 
improves uniformity among replicate samples. Similarly, 
a single enzyme mixture is provided for each step of the 
library construction process, reducing the number of 
pipetting steps. 
In order to maximize sequence coverage uniformity and 
to maintain relative transcript abundance, it is critical 
that library amplification bias be kept to a minimum. 
KAPA HiFi DNA Polymerase has been designed for 
low-bias, high-fidelity PCR and is the polymerase of 
choice for NGS library amplification 1,2,3,4 . The KAPA RNA 
HyperPrep Kit with RiboErase (HMR) includes KAPA HiFi 
HotStart ReadyMix (2X) and Library Amplification Primer 
Mix (10X) for library amplification.               
> 1. Oyola, S.O., et al., BMC Genomics 13 , 1 (2012).
> 2. Quail, M.A., et al., Nature Methods 9, 10 –11 (2012).
> 3. Quail, M.A., et al., BMC Genomics 13 , 341 (2012).
> 4. Ross, M.G., et al., Genome Biology 14 , R51 (2013).
Product Applications 
The KAPA RNA HyperPrep Kit with RiboErase (HMR) is 
designed for both manual and automated NGS library 
construction from 25  ng  – 1 μg of total RNA. The kit 
depletes both cytoplasmic (5S, 5.8S, 18S, and 28S), and 
mitochondrial (12S and 16S) rRNA species. The protocol 
is applicable to a wide range of RNA-Seq applications, 
including: 
• gene expression analysis of high- and low-quality RNA 
samples (e.g., extracted from FFPE tissue); 
• single nucleotide variation (SNV) discovery; 
• splice junction and gene fusion identification; and 
• characterization of both polyadenyated and non-
polyadenylated RNAs, including noncoding and 
immature RNAs. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  3
Product Specifications 
Shipping and Storage 
KAPA RNA HyperPrep Kits with RiboErase (HMR) are 
supplied in multiple boxes:     
> Contents Storage upon receipt
> rRNA depletion reagents -15°C to -25°C
> cDNA synthesis and library
> preparation reagents -15°C to -25°C
> KAPA Pure Beads 2°C to 8°C
KAPA Pure Beads are shipped on dry ice or ice packs, 
depending on the destination country.  Upon receipt, 
store KAPA Pure Beads at 2°C to 8°C . Boxes containing 
enzymes and buffers for rRNA depletion, cDNA synthesis, 
and library preparation are shipped on dry ice or ice packs, 
depending on the destination country. These components 
are temperature sensitive, and appropriate care should be 
taken during storage.  Upon receipt, store the enzymes 
and buffers for rRNA depletion, cDNA synthesis, and 
library preparation at -15°C to -25°C  in a constant-
temperature freezer. The 1st Strand Synthesis Buffer, PEG/ 
NaCl Solution, and KAPA Pure Beads are light-sensitive 
and should be protected from light during storage. 
When stored under these conditions and handled correctly, 
the kit components will retain full activity until the expiry 
date indicated on the kit label. 
Handling 
Reagents for rRNA depletion, cDNA synthesis, and library 
preparation  must be stored at -15°C to -25°C , as these 
components are temperature sensitive. Ensure that all 
components have been fully thawed and thoroughly 
mixed before use. Keep all reaction components and 
master mixes on ice whenever possible during handling 
and preparation, unless specified otherwise. 
KAPA Pure Beads  must be stored at 2°C to 8°C, and 
not at -15°C to -25°C . Equilibrate KAPA Pure Beads 
to room temperature and mix thoroughly before use. 
The 1st Strand Synthesis Buffer, PEG/NaCl Solution, and 
KAPA Pure Beads are light sensitive, and appropriate care 
must be taken to minimize light exposure. Similar care 
should be observed for the 1st strand synthesis master mix. 
KAPA HiFi HotStart ReadyMix (2X) may not freeze 
completely, even when stored at -15°C to -25°C. 
Nevertheless, always ensure that the KAPA HiFi HotStart 
ReadyMix (2X) is fully thawed and thoroughly mixed 
before use. 
The PEG/NaCl Solution does not freeze at -15°C to -25°C, 
but should be equilibrated to room temperature and mixed 
thoroughly before use. For short-term use, the PEG/NaCl 
Solution may be stored at 2°C to 8°C (protected from light) 
for ≤2 months. 
Quality Control 
All kit components are subjected to stringent functional 
quality control, are free of detectable contaminating 
exo- and endonuclease activities, and meet strict 
requirements with respect to DNA contamination. 
Reagent kits are functionally validated through 
construction of transcriptome libraries and sequencing 
on an NGS platform. Please contact Technical Support 
at  kapabiosystems.com/support  for more information. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 4 For Research Use Only. Not for use in diagnostic procedures. 
Important Parameters 
Input RNA Requirements 
• The protocol has been validated for library construction 
from 25  ng  – 1 μg of total RNA in ≤10  μL of RNase-
free water. 
• The quantity of rRNA in a total RNA sample can vary 
significantly between samples. An input of 25  ng  – 1 μg 
of total RNA is recommended to ensure that sufficient 
rRNA-depleted RNA is available for downstream library 
preparation. 
• RNA in volumes >10  μL should be concentrated to 
10  μL prior to use by either ethanol precipitation, bead 
purification (e.g., KAPA Pure Beads or RNAClean ® XP 
beads, Beckman Coulter ®), or column-based methods 
(e.g., RNeasy ® MinElute ® Cleanup Kit, QIAGEN). Note 
that some loss of material is inevitable when using any 
of the above methods to concentrate RNA. 
• When concentrating RNA, elute in 12  μL of RNase-free 
water to ensure that 10  μL is available for use with this 
protocol. 
• It is recommended to assess the quality and size 
distribution of the input RNA prior to rRNA depletion 
by an electrophoretic method (e.g., Agilent ® Bioanalyzer ®
RNA assay). 
• The quality of RNA extracted from formalin-fixed 
paraffin embedded (FFPE) tissue can be highly variable 
due to the damaging nature of the formalin fixation 
process, where crosslinking, chemical modification, 
and fragmentation can occur. Library construction 
results may vary depending on the input amount and 
quality of the RNA. Increasing the input amount of 
RNA (up to 1  μg) may salvage library construction with 
particularly difficult FFPE samples. 
RNA Handling 
• RNases are ubiquitous and special care should be 
taken throughout the procedure to avoid RNase 
contamination. 
• To avoid airborne RNase contamination, keep all 
reagents and RNA samples closed when not in use. 
• Use a laminar flow hood if available, or prepare a 
sterile and RNase-free area. Clean the workspace, 
pipettes, and other equipment with an RNase removal 
product (e.g., RNase ZAP ®, Ambion Inc.) according to 
manufacturer’s recommendations. 
• To avoid RNase contamination, always wear gloves 
when handling reagents and use certified RNase-free 
plastic consumables. Change gloves after making 
contact with equipment or surfaces outside of the 
RNase-free working area. 
• To mix samples containing RNA, gently pipette the 
reaction mixture several times. Vortexing may fragment 
the RNA, resulting in lower quantity and a reduced 
library insert size. 
• To avoid degradation, minimize the number of freeze-
thaw cycles and always store RNA in RNase-free water. 
RNA Fragmentation 
• RNA is fragmented by incubating at a high temperature 
in the presence of magnesium before carrying out 
1st strand cDNA synthesis. 
• Fragmentation conditions given in the  Library 
Construction Protocol  should be used as a guideline 
and may require adjustment based upon the quality and 
size distribution of the input RNA. It is recommended 
that a non-precious, representative sample of RNA be 
evaluated for the optimal fragmentation conditions. 
• For intact RNA, such as that extracted from fresh/ 
frozen tissue, longer fragmentation is required at 
higher temperatures. For degraded or fragmented RNA 
(e.g., from older samples or FFPE tissue), use a lower 
temperature and/or shorter time. 
• For fragmentation optimization beyond what is 
provided in the  Library Construction Protocol ,
please refer to  Appendix: Library Size Distribution 
Optimization  (p.  16). Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  5
Safe Stopping Points 
The library construction process from rRNA depletion 
through library amplification can be performed 
in approximately 6.5  hrs, depending on the number 
of samples being processed and experience. If necessary, 
the protocol may be paused safely at any of the 
following steps: 
• After elution in Fragment, Prime and Elute Buffer (1X), 
RNA Elution, Fragmentation and Priming  (step  6.5), 
store the rRNA-depleted material at -20°C for ≤24  hrs. 
• After  1st Post-ligation Cleanup  (step  10), store the 
resuspended beads at 4°C for ≤24 hrs. 
• After  2nd Post-ligation Cleanup  (step  11), store the 
eluted, unamplified library at 4°C for ≤1  week, or at 
-20°C for ≤1  month. 
DNA and RNA solutions containing beads must not 
be frozen or stored dry, as this is likely to damage the 
beads and result in sample loss. To resume the library 
construction process, centrifuge briefly to recover any 
condensate, and add the remaining components required 
for the next enzymatic reaction in the protocol. 
To avoid degradation, minimize the number of freeze-thaw 
cycles, and always store RNA in RNase-free water and 
DNA in a buffered solution (10  mM  Tris-HCl, pH  8.0  – 8.5). 
Reaction Setup 
This kit is intended for manual and automated NGS library 
construction. To enable a streamlined strategy, reaction 
components should be combined into master mixes, 
rather than dispensed separately into individual reactions. 
When processing multiple samples, prepare a minimum 
of 10% excess of each master mix to allow for small 
inaccuracies during dispensing. Recommended volumes 
for 8, 24, and 96 reactions (with excess) are provided in 
Tables 2  – 8. 
Libraries may be prepared in standard reaction vessels, 
including PCR tubes, strip tubes, or PCR plates. Always 
use plastics that are certified to be RNase- and DNase-free. 
Low RNA- and DNA-binding plastics are recommended. 
When selecting the most appropriate plastic consumables 
for the workflow, consider compatibility with: 
• the magnet used during KAPA Pure Bead manipulations; 
• vortex mixers and centrifuges, where appropriate; and 
• Peltier devices or thermocyclers used for reaction 
incubations and/or library amplification. 
Reaction Cleanups 
• This protocol has been validated for use with KAPA 
Pure Beads. Solutions and conditions for nucleic acid 
binding may differ if other beads are used. 
• Cleanup steps should be performed in a timely manner 
to ensure that enzymatic reactions do not proceed 
beyond optimal incubation times. 
• Observe all storage and handling recommendations for 
KAPA Pure Beads. Equilibration to room temperature 
is essential to achieve specified size distribution and 
yield of libraries. 
• Beads will settle gradually; ensure that they are fully 
resuspended before use. 
• To ensure optimal nucleic acid recovery, it is 
critical that the nucleic acid and KAPA Pure Beads 
are thoroughly mixed  (by vortexing or extensive 
up-and-down pipetting) before the nucleic acid binding 
incubation. 
• Bead incubation times are guidelines only, and may 
be modified/optimized according to current protocols, 
previous experience, specific equipment and samples 
in order to maximize library construction efficiency and 
throughput. 
• The time required for complete capture of magnetic 
beads varies according to the reaction vessel and 
magnet used. It is important not to discard or transfer 
any beads with the removal of the supernatant. 
Capture times should be optimized accordingly. 
• The volumes of 80% ethanol for the bead washes may 
be adjusted to accommodate smaller reaction vessels 
and/or limiting pipetting capacity, but it is important 
that the beads are entirely submerged during the wash 
steps.  Always use freshly prepared 80% ethanol. 
• It is important to remove all ethanol before proceeding 
with subsequent reactions. However, over-drying of 
beads may make them difficult to resuspend, and may 
result in a dramatic loss of sample. With optimized 
aspiration of ethanol, drying of beads for 3  – 5 min at 
room temperature should be sufficient.  Drying beads 
at 37°C is not recommended. 
• Where appropriate, DNA should be eluted from beads 
in elution buffer (10  mM  Tris-HCl, pH 8.0  – 8.5). Elution 
of DNA in PCR-grade water is not recommended, as 
DNA is unstable in unbuffered solutions. Purified DNA 
in elution buffer should be stable at 4°C for 1  – 2 weeks, 
or at -20°C for long-term storage. The long-term 
stability of library DNA at -20°C depends on a number 
of factors, including library concentration. Always use 
low DNA-binding tubes for long-term storage, and 
avoid excessive freezing and thawing. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 6 For Research Use Only. Not for use in diagnostic procedures. 
Adapter Design and Concentration 
• KAPA Adapters are recommended for use with the KAPA 
RNA HyperPrep Kit with RiboErase (HMR). However, 
this workflow is also compatible with other full-length 
adapter designs wherein both the sequencing and 
cluster generation sequences are added during the 
ligation step, such as those routinely used in Illumina 
TruSeq ®, Roche ® NimbleGen ™ SeqCap ™ EZ, Agilent ®
SureSelect ® XT2, and other similar library construction 
workflows. Custom adapters that are of similar design 
and are compatible with “TA-ligation” of dsDNA may 
also be used, remembering that custom adapter 
designs may impact library construction efficiency. 
Truncated adapter designs, where cluster generation 
sequences are added during amplification instead of 
ligation, may require modified post-ligation cleanup 
conditions. For assistance with adapter compatibility, 
ordering, and duplexing, please contact Technical 
Support at  kapabiosystems.com/support .
• Adapter concentration affects ligation efficiency, as well 
as adapter and adapter-dimer carryover during post-
ligation cleanups. The optimal adapter concentration 
for the workflow represents a compromise between 
the above factors and cost. 
• Adapter quality has an impact on the effective 
concentration of adapter available for ligation. Always 
source the highest quality adapters from a reliable 
supplier, dilute and store adapters in a buffered solution 
with the requisite ionic strength, and avoid excessive 
freezing and thawing of adapter stock solutions. 
• Adapter-dimer formation may occur when using 
highly degraded RNA inputs, such as RNA extracted 
from FFPE tissue, or input amounts lower than the 
validated range (25  ng). If adapter-dimers are present, 
as evidenced by a sharp 120 to 140  bp peak in the 
final library, perform a second 1X bead cleanup post 
amplification to remove small products. Adapter-
dimer formation can be prevented in future library 
preparations by reducing the amount of adapter in the 
ligation reaction. 
Library Amplification 
• KAPA HiFi HotStart, the enzyme provided in the KAPA 
HiFi HotStart ReadyMix (2X), is an antibody-based 
hot start formulation of KAPA HiFi DNA Polymerase, 
a novel B-family DNA polymerase engineered for 
increased processivity and high fidelity. KAPA HiFi 
HotStart DNA Polymerase has 5' g3' polymerase 
and 3' g5'exonuclease (proofreading) activities, 
but no 5' g3'exonuclease activity. The strong 3' g5' 
exonuclease activity results in superior accuracy during 
DNA amplification. The error rate of KAPA HiFi HotStart 
DNA Polymerase is 2.8  x 10 -7  errors/base, equivalent to 
1 error per 3.5  x 10 6 nucleotides incorporated. 
• Library Amplification Primer Mix (10X) is designed 
to eliminate or delay primer depletion during library 
amplification reactions performed with KAPA 
HiFi HotStart ReadyMix (2X). The primer mix is suitable 
for the amplification of all Illumina libraries flanked 
by the P5 and P7 flow cell sequences. Primers are 
supplied at a 10X concentration of 20 μM each, 
and have been formulated as described below. 
User-supplied primers may be used in combination with 
custom adapters. Please contact Technical Support at 
kapabiosystems.com/support  for guidelines on the 
formulation of user-supplied library amplification primers. 
• To achieve optimal amplification efficiency and 
avoid primer depletion, it is critical to use an optimal 
concentration of high-quality primers. Primers should 
be used at a final concentration of 0.5  – 4 μM each. 
• Library amplification primers should be HPLC-purified 
and modified to include a phosphorothioate bond at 
the 3'-terminal of each primer (to prevent degradation 
by the strong proofreading activity of KAPA HiFi 
HotStart). Always store and dilute primers in buffered 
solution (e.g., 10  mM  Tris-HCl, pH  8.0  – 8.5), and limit 
the number of freeze-thaw cycles. To achieve the latter, 
store primers at 4°C for short-term use, or as single-
use aliquots at -20°C. 
• In library amplification reactions (set up according to the 
recommended protocol), primers are typically depleted 
before dNTPs. When DNA synthesis can no longer 
take place due to substrate depletion, subsequent 
rounds of DNA denaturation and annealing result in the 
separation of complementary DNA strands, followed 
by the imperfect annealing to non-complementary 
partners. This presumably results in the formation of 
so-called “daisy chains” or “tangled knots”, comprising 
large assemblies of improperly annealed, partially 
double-stranded, heteroduplex DNA. These species 
migrate slower and are observed as secondary, 
higher molecular weight peaks during electrophoretic 
analysis of amplified libraries. However, they typically Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  7
comprise library molecules of the desired length, 
which are individualized during denaturation prior 
to cluster amplification. Since these heteroduplexes 
contain significant portions of single-stranded DNA, 
over-amplification leads to the under-quantification 
of library molecules with assays employing dsDNA-
binding dyes. qPCR-based library quantification 
methods, such as the KAPA Library Quantification 
assay, quantify DNA by denaturation and amplification, 
thereby providing an accurate measure of the amount 
of adapter-ligated molecules in a library—even if the 
library was over-amplified. 
• Excessive library amplification can result in other 
unwanted artifacts, such as amplification bias, PCR 
duplicates, chimeric library inserts, and nucleotide 
substitutions. The extent of library amplification 
should therefore be limited as much as possible, while 
ensuring that sufficient material is generated for QC 
and downstream processing. 
• If cycled to completion  (not recommended) , one 
50  μL library amplification PCR—performed as 
described in  Library Amplification  (step  12)—can 
produce 8  – 10  μg of amplified library. To minimize 
over-amplification and its associated, undesired 
artifacts, the number of amplification cycles should be 
tailored to produce the optimal amount of final library 
required for downstream processes. 
• The number of cycles recommended in Table  1
should be used as a guide for library amplification. 
Cycle numbers may require adjustment depending 
on library RNA input quality, amplification efficiency, 
presence of adapter-dimer, and the desired yield 
post amplification. Quantification of material after the 
second post-ligation cleanup using a qPCR assay, 
such as the KAPA Library Quantification Kit, can help to 
determine the number of amplification cycles required 
for a specific sample type or application.                          
> Table 1. Recommended library amplification cycles
> Quantity of starting material Number of cycles
> 25 –100 ng 11 –15
> 101 –250 ng 9–12
> 251 –500 ng 7–10
> 501 –1000 ng 6–8
Evaluating the Success of Library Construction 
• A specific library construction workflow should be 
tailored and optimized to yield a sufficient amount of 
adapter-ligated molecules of the desired size distribution 
for sequencing, QC, and archiving purposes. 
• The size distribution of final libraries should be 
confirmed with an electrophoretic method. A LabChip ®
GX, GXII, or GX Touch (PerkinElmer), Bioanalyzer ®
or TapeStation ® (Agilent Technologies), Fragment 
Analyzer ™ (Advanced Analytical Technologies) or similar 
instrument is recommended over conventional gels. 
• KAPA Library Quantification Kits for Illumina platforms 
are recommended for qPCR-based quantification of 
libraries generated with the KAPA RNA HyperPrep 
Kit with RiboErase (HMR). These kits employ primers 
based on the Illumina flow cell oligos and can be used 
to quantify libraries that: 
- are ready for flow-cell amplification, and/or 
- were constructed with full-length adapters, once 
ligation has been completed (i.e., after the post-
ligation cleanup or after library amplification 
cleanup). 
• The availability of quantification data before and after 
library amplification allows the two major phases of 
the library construction process to be evaluated and 
optimized independently to achieve the desired yield 
of amplified library with minimal bias. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 8 For Research Use Only. Not for use in diagnostic procedures. 
Process Workflow 
1st strand cDNA is synthesized 
with random primers 
2nd strand cDNA synthesis converts 
cDNA:RNA hybrid to dscDNA, while 
marking the 2nd strand with dUTP. 
dAMP is then added to the 3'-end of 
dscDNA fragments 
Adapter-ligated library DNA 
is amplified by PCR; dUTP-
marked strand is not amplified 
Library fragment size distribution is 
confirmed by electrophoresis. Library 
concentration is determined by qPCR 
(KAPA Library Quantification Kit ). 
From human, mouse, or rat 25  ng  – 1 μg total RNA (10  μL) 
1st Strand Synthesis 
(step  7) 
2nd Strand Synthesis and 
A-tailing  (step  8) 
Adapter Ligation 
(step  9) 
Library QC 
RNA Elution, Fragmentation 
and Priming  (step  6) 
Safe Stopping Point 
Store at -20ºC for ≤24 hrs 
Library Amplification 
(step  12) 
1X Bead-based Cleanup 
(step  13) 
DNase Digestion 
(step  4) 
Prepare master mixes 
(step  1) 
Oligo Hybridization and rRNA 
Depletion  (step  2) 
2.2X Bead-based Cleanup 
(step  3) 
2.2X Bead-based Cleanup 
(step  5) 
rRNA duplexed to DNA oligos is 
digested by RNase H treatment 
Hybridization oligos are 
removed from the sample 
prior to cDNA synthesis 
rRNA-depleted RNA is eluted and 
fragmented to the desired size using 
heat in the presence of Mg 2+ 
0.7X Bead-based Cleanup 
(step  11) 
0.63X Bead-based Cleanup 
(step  10) 
Safe Stopping Point 
Store at 4°C for ≤24 hours 
Safe Stopping Point 
Store at 4°C for ≤1 week 
3'-dTMP adapters are ligated to 
3'-dAMP library fragments Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  9
Table 2. Oligo hybridization 
Component  1 library 
> No excess
8 libraries 
> Inc. 10% excess
24 libraries 
> Inc. 10% excess
96 libraries 
> Inc. 10% excess
N libraries 
> Inc. 10% excess
Hybridization master mix: 
Hybridization Buffer  4 μL  35.2  μL  106  μL  423  μL  N*4.4  μL 
Hybridization Oligos (HMR)  4 μL  35.2  μL  106  μL  423  μL  N*4.4  μL 
RNase-free water  2 μL  17.6  μL  53  μL  211  μL  N*2.2  μL 
Total master mix volume:  10  μL  88  μL  265  μL  1057  μL  N*11  μL 
Final reaction composition:  Per reaction 
Hybridization master mix  10  μL 
Total RNA  10  μL 
Total reaction volume:  20  μL 
Table 3. rRNA depletion 
Component  1 library 
> No excess
8 libraries 
> Inc. 10% excess
24 libraries 
> Inc. 10% excess
96 libraries 
> Inc. 10% excess
N libraries 
> Inc. 10% excess
DNase digestion master mix 
Depletion Buffer  3 μL  26.4  μL  80  μL  317  μL  N*3.3  μL 
RNase H  2 μL  17.6  μL  53  μL  211  μL  N*2.2  μL 
Total master mix volume:  5 μL  44  μL  133  μL  528  μL  N*5.5  μL 
Final reaction composition:  Per reaction 
Depletion master mix  5 μL 
Total RNA hybridized to oligos  20  μL 
Total reaction volume:  25  μL 
Table 4. DNase digestion 
Component:  1 library 
> No excess
8 libraries 
> Inc. 10% excess
24 libraries 
> Inc. 10% excess
96 libraries 
> Inc. 10% excess
N libraries 
> Inc. 10% excess
DNase digestion master mix 
DNase Buffer  2.2  μL  19.4  μL  58  μL  232  μL  N*2.42  μL 
DNase  2 μL  17.6  μL  53  μL  211  μL  N*2.2  μL 
RNase-free water  17.8  μL  157  μL  470  μL  1880  μL  N*19.58  μL 
Total master mix volume:  22  μL  194  μL  581  μL  2323  μL  N*24.2 
Resuspend beads in a volume of:  22  μL 
Library Construction Protocol 
1.  Reagent Preparation 
This protocol takes approximately 6.5  hrs to 
complete. Ideally, master mixes for the various steps 
in the process should be prepared as required. 
For maximum stability and shelf-life, enzymes 
and reaction buffers are supplied separately in the 
KAPA RNA HyperPrep Kit with RiboErase (HMR). 
For a streamlined protocol, a reagent master 
mix with a minimum of 10% excess is prepared 
for each of these enzymatic steps, as outlined 
in Tables 2  – 8. Volumes of additional reagents 
required for the KAPA RNA HyperPrep Kit with 
RiboErase (HMR) protocol are listed in Table  9. 
Always ensure that KAPA Pure Beads and PEG/ 
NaCl Solution are fully equilibrated to room 
temperature before use. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 10  For Research Use Only. Not for use in diagnostic procedures. 
Table 5. 1st strand synthesis 
Component  1 library 
Inc. 20% excess 
8 libraries 
Inc. 20% excess 
24 libraries 
Inc. 20% excess 
96 libraries 
Inc. 20% excess 
N libraries 
Inc. 20% excess 
1st strand synthesis master mix: 
1st Strand Synthesis Buffer  11  μL  88  μL  264  μL  1056  μL  N*11  μL 
KAPA Script  1 μL  8 μL  24  μL  96  μL  N*1  μL 
Total master mix volume:  12  μL  96  μL  288  μL  1152  μL  N*12  μL 
Final reaction composition:  Per reaction 
1st strand synthesis master mix  10  μL 
Fragmented, primed RNA  20  μL 
Total reaction volume:  30  μL 
Table 6. 2nd strand synthesis and A-tailing 
Component  1 library 
Inc. 10% excess 
8 libraries 
Inc. 10% excess 
24 libraries 
Inc. 10% excess 
96 libraries 
Inc. 10% excess 
N libraries 
Inc. 10% excess 
2nd strand synthesis and A-tailing 
master mix: 
2nd Strand Marking Buffer  31  μL  248  μL  744  μL  2976  μL  N*31  μL 
2nd Strand Synthesis & A-Tailing 
Enzyme Mix 
2 μL  16  μL  48  μL  192  μL  N*2  μL 
Total master mix volume:  33  μL  264  μL  792  μL  3168  μL  N*33  μL 
Final reaction composition:  Per reaction 
2nd strand synthesis master mix  30  μL 
1st strand cDNA  30  μL 
Total reaction volume:  60  μL 
Table 7. Adapter ligation 
Component  1 library 
Inc. 10% excess 
8 libraries 
Inc. 10% excess 
24 libraries 
Inc. 10% excess 
96 libraries 
Inc. 10% excess 
N libraries 
Inc. 10% excess 
Adapter ligation master mix: 
Ligation Buffer  40  μL  320  μL  960  μL  3840  μL  N*40  μL 
DNA Ligase  10  μL  80  μL  240  μL  960  μL  N*10  μL 
Total master mix volume:  50  μL  400  μL  1200  μL  4800  μL  N*50  μL 
Final reaction composition:  Per reaction 
Adapter ligation master mix  45  μL 
A-tailed dscDNA  60  μL 
Adapter, 1.5 μM or 7 uM, see step 9.1  5 μL 
Total reaction volume:  110  μL 
Table 8. Library amplification 
Component  1 library 
No excess 
8 libraries 
Inc. 10% excess 
24 libraries 
Inc. 10% excess 
96 libraries 
Inc. 10% excess 
N libraries 
Inc. 10% excess 
Library amplification master mix: 
KAPA HiFi HotStart ReadyMix (2X)  25  μL  220  μL  660  μL  2640  μL  N*27.5  μL 
Library Amplification Primer Mix (10X)  5 μL  44  μL  132  μL  528  μL  N*5.5  μL 
Total master mix volume:  30  μL  264  μL  792  μL  3168  μL  N*33  μL 
Final reaction composition:  Per reaction 
Library amplification master mix  30  μL 
Adapter-ligated DNA  20  μL 
Total reaction volume:  50  μL Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  11 
2.  Oligo Hybridization and rRNA Depletion 
This protocol requires 25  ng  – 1 μg of total RNA, in 
10  μL of RNase-free water. 
Ensure that the hybridization master mix (Table  2) 
and the depletion master mix (Table  3) are prepared 
and kept at room temperature before use. 
2.1  Program a thermocycler as follows: 
Step  Temp.  Duration 
Hybridization  95°C  2 min 
Ramp down to 45°C at -0.1°C/s 
PAUSE  45°C  ∞
Depletion  45°C  30 min 
HOLD  4°C  ∞
2.2  Assemble rRNA Hybridization reactions as follows: 
Component  Volume 
Total RNA in water  10  μL 
Hybridization master mix at room 
temperature (Table 2) 
10  μL 
Total volume:  20  μL 
2.3  Place samples in the pre-programmed 
thermocycler and execute the program. 
2.4  Ensure the depletion master mix containing 
RNase  H is added while the samples are kept at 
45°C in a thermocycler. When the program reaches 
the pause step at 45°C, add the following to each 
20  μL hybridization reaction and mix thoroughly 
by pipetting up and down multiple times. 
Component  Volume 
Depletion master mix at room 
temperature (Table 3) 
5 μL 
Total volume:  25  μL 
2.5  Resume the cycling program to continue with the 
depletion step (45°C for 30 min). 
2.6  Proceed immediately to  rRNA Depletion Cleanup 
(step  3). 
Table 9. Volumes of additional reagents required 
Component  1 library 
> No excess
8 libraries 
> Inc. ≥10% excess
24 libraries 
> Inc. ≥10% excess
96 libraries 
> Inc. ≥10% excess
N libraries 
> Inc. ≥10% excess
KAPA Pure Beads (provided in kit): 
rRNA depletion cleanups  99  μL  880  μL  2.6  mL  10.5  mL  N*108.9  μL 
1st post-ligation cleanup  70  μL  620  μL  1.9  mL  7.4  mL  N*77  μL 
Library amplification cleanup  50  μL  440  μL  1.4  mL  5.3  mL  N*55  μL 
Total volume required:  219  μL  1940  μL  6.0  mL  23.3  mL  N*241  μL 
Component  1 library 
> No excess
8 libraries 
> Inc. ≥10% excess
24 libraries 
> Inc. ≥10% excess
96 libraries 
> Inc. ≥10% excess
N libraries 
> Inc. ≥10% excess
PEG/NaCl Solution (provided in kit): 
2nd post-ligation cleanup  35  μL  310  μL  930  μL  3.7  mL  N*38.5  μL 
Total volume required:  35  μL  310  μL  930  μL  3.7  mL  N*38.5  μL 
Component  1 library 
> No excess
8 libraries 
> Inc. ≥10% excess
24 libraries 
> Inc. ≥10% excess
96 libraries 
> Inc. ≥10% excess
N libraries 
> Inc. ≥10% excess
80% ethanol (freshly prepared; 
not supplied): 
rRNA depletion cleanups  0.8 mL  7.0 mL  21.1 mL  84.5 mL  N*0.9 mL 
1st post-ligation cleanup  0.4  mL  3.6  mL  10.6  mL  42.3  mL  N*0.5  mL 
2nd post-ligation cleanup  0.4  mL  3.6  mL  10.6  mL  42.3  mL  N*0.5  mL 
Library amplification cleanup  0.4  mL  3.6  mL  10.6  mL  42.3  mL  N*0.5  mL 
Total volume required:  2.0  mL  18.0  mL  53.0  mL  211.5  mL  N*2.2  mL 
Component  1 library 
> No excess
8 libraries 
> Inc. ≥10% excess
24 libraries 
> Inc. ≥10% excess
96 libraries 
> Inc. ≥10% excess
N libraries 
> Inc. ≥10% excess
Elution buffer (10  mM Tris-HCl, 
pH  8.0  – 8.5; not supplied): 
1st post-ligation cleanup  50  μL  440  μL  1.4  mL  5.3  mL  N*55  μL 
2nd post-ligation cleanup  22  μL  200  μL  0.6  mL  2.4  mL  N*25  μL 
Library amplification cleanup  22  μL  200  μL  0.6  mL  2.4  mL  N*25  μL 
Total volume required:  94  μL  840  μL  2.6  mL  10.1  mL  N*105  μL Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 12  For Research Use Only. Not for use in diagnostic procedures. 
3.  rRNA Depletion Cleanup 
3.1  Perform a 2.2X bead-based cleanup by combining 
the following:        
> Component Volume
> rRNA-depleted RNA 25 μL
> KAPA Pure Beads 55 μL
> Total volume: 80 μL
3.2  Thoroughly resuspend the beads by pipetting up 
and down multiple times. 
3.3  Incubate the plate/tube(s) at room temperature for 
5 min to bind RNA to the beads. 
3.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
3.5  Carefully remove and discard 75  μL of supernatant. 
3.6  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
3.7  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30 sec. 
3.8  Carefully remove and discard the ethanol. 
3.9  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
3.10  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30 sec. 
3.11  Carefully remove and discard the ethanol. Try to 
remove all residual ethanol without disturbing 
the beads. 
3.12  Dry the beads at room temperature for 3  – 5 min, 
or until all of the ethanol has evaporated.  Caution: 
over-drying the beads may result in reduced yield. 
4.  DNase Digestion 
To remove the hybridization oligonucleotides 
from the ribosomal-depleted RNA, the sample is 
incubated with DNase.  Ensure that the DNase 
digestion master mix (Table  4) is prepared and 
kept at room temperature. 
4.1  Assemble DNase Digestion reactions as follows:      
> Component Volume
> Beads with rRNA-depleted RNA –
> DNase digestion master mix at room
> temperature (Table 4)
> 22 μL
> Total volume: 22 μL
4.2  Thoroughly resuspend the beads by pipetting up 
and down multiple times. 
4.3  Incubate the plate/tube(s) at room temperature for 
3 min to elute the RNA off the beads. 
4.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
4.5  Carefully transfer 20  μL of supernatant into a new 
plate/tube(s). Discard the plate/tube(s) with beads. 
4.6  Incubate the plate/tube(s) with supernatant using 
the following protocol:        
> Step Temp. Duration
> DNase digestion 37°C 30 min
> HOLD 4°C ∞
4.7  Proceed immediately to  DNase Digestion Cleanup 
(step 5). 
5.  DNase Digestion Cleanup 
5.1  Perform a 2.2X bead-based cleanup by combining 
the following:        
> Component Volume
> DNase-treated RNA 20 μL
> KAPA Pure Beads 44 μL
> Total volume: 64 μL
5.2  Thoroughly resuspend the beads by pipetting up 
and down multiple times. 
5.3  Incubate the plate/tube(s) at room temperature for 
5 min to bind RNA to the beads. 
5.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
5.5  Carefully remove and discard 60  μL of supernatant. 
5.6  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
5.7  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30 sec. 
5.8  Carefully remove and discard the ethanol. 
5.9  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
5.10  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
5.11  Carefully remove and discard the ethanol. Try to 
remove all residual ethanol without disturbing 
the beads. 
5.12  Dry the beads at room temperature for 3  – 5 min, 
or until all of the ethanol has evaporated.  Caution: 
over-drying the beads may result in reduced yield. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  13 
6.  RNA Elution, Fragmentation and Priming 
RNA depleted of rRNA is eluted from beads 
in Fragment, Prime and Elute Buffer (1X) and 
fragmented to the desired size by incubation at 
high temperature. 
6.1  Prepare the required volume of Fragment, Prime 
and Elute Buffer (1X) by combining the following at 
room temperature: 
Component  Volume per 
sample 
Fragment, Prime and Elute Buffer (2X)  11  μL 
RNase-free Water  11  μL 
Total volume:  22  μL 
6.2  Thoroughly resuspend the beads with purified, 
DNase-treated RNA in 22  μL of Fragment, Prime 
and Elute Buffer (1X) by pipetting up and down 
multiple times. 
6.3  Incubate the plate/tube(s) at room temperature for 
3 min to elute RNA off the beads. 
6.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
6.5  Carefully transfer 20  μL of supernatant into a new 
plate/tube(s). Discard the plate/tube(s) with beads. 
SAFE STOPPING POINT 
Samples can be stored at -20°C for ≤24 hrs. When 
ready, proceed to step  6.6. 
6.6  Place the plate/tube(s) in a thermocycler and 
carry out the fragmentation and priming program 
as follows: 
Input RNA type 
Desired mean 
library insert 
size (bp) 
Fragmentation 
Intact 
100  – 200  8 min at 94°C 
200  – 300  6 min at 94°C 
300  – 400  6 min at 85°C 
Partially 
degraded  100  – 300  1 – 6 min at 85°C 
Degraded 
(e.g., FFPE)  100  – 200  1 min at 65°C 
6.7  Place the plate/tube(s) on ice and proceed 
immediately to  1st Strand Synthesis  (step 7). 
7.  1st Strand Synthesis 
7.1  On ice, assemble the 1st strand synthesis reaction 
as follows: 
Component  Volume 
Fragmented, primed RNA  20  μL 
1st strand synthesis master mix 
(Table  5)  10  μL 
Total volume:  30  μL 
7.2  Keeping the plate/tube(s) on ice, mix thoroughly 
by gently pipetting the reaction up and down 
several times. 
7.3  Incubate the plate/tube(s) using the following 
protocol: 
Step  Temp.  Duration 
Primer extension  25°C  10 min 
1st strand synthesis  42°C  15 min 
Enzyme inactivation  70°C  15 min 
HOLD  4°C  ∞
7.4  Place the plate/tube(s) on ice, and proceed 
immediately to  2nd Strand Synthesis and 
A-tailing  (step  8). 
8.  2nd Strand Synthesis and A-tailing 
8.1  On ice, assemble the 2nd strand synthesis and 
A-tailing reaction as follows: 
Component  Volume 
1st strand synthesis product  30  μL 
2nd strand synthesis and A-tailing 
master mix (Table  6) 
30  μL 
Total volume:  60  μL 
8.2  Keeping the plate/tube(s) on ice, mix thoroughly 
by gently pipetting the reaction up and down 
several times. 
8.3  Incubate the plate/tube(s) using the following 
protocol: 
Step  Temp.  Duration 
2nd strand synthesis  16°C  30  min 
A-tailing  62°C  10  min 
HOLD  4°C  ∞
8.4  Place the plate/tube(s) on ice, and proceed 
immediately to  Adapter Ligation  (step  9). Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 14  For Research Use Only. Not for use in diagnostic procedures. 
9.  Adapter Ligation 
9.1  Dilute adapters in preparation for ligation, targeting 
the following concentrations: 
Quantity of 
starting material 
Starting 
material quality 
Adapter stock 
concentration 
25 – 499 ng 
Partially degraded 
or FFPE-derived  1.5 μM 
High-quality  1.5 μM 
500 – 1000 ng 
Partially degraded 
or FFPE-derived  1.5 μM 
High-quality  7 μM 
9.2  One ice, set up the adapter ligation reaction as 
follows: 
Component  Volume 
2nd strand synthesis product  60  μL 
Adapter ligation master mix (Table  7)  45  μL 
Diluted adapter stock  5 μL 
Total volume:  110  μL 
9.3  Keeping the plate/tube(s) on ice, mix thoroughly by 
pipetting the reaction up and down several times. 
9.4  Incubate the plate/tube(s) at 20°C for 15  min. 
9.5  Proceed immediately to  1st Post-ligation Cleanup 
(step  10). 
10.  1st Post-ligation Cleanup 
10.1  Perform a 0.63X bead-based cleanup by 
combining the following: 
Component  Volume 
Adapter-ligated DNA  110  μL 
KAPA Pure Beads  70  μL 
Total volume:  180  μL 
10.2  Mix thoroughly by vortexing and/or pipetting up 
and down multiple times. 
10.3  Incubate the plate/tube(s) at room temperature for 
5 – 15  min to bind DNA to the beads. 
10.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
10.5  Carefully remove and discard 175  μL of supernatant. 
10.6  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
10.7  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30 sec. 
10.8  Carefully remove and discard the ethanol. 
10.9  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
10.10  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
10.11  Carefully remove and discard the ethanol. Try to 
remove all residual ethanol without disturbing 
the beads. 
10.12  Dry the beads at room temperature for 3  – 5 min, 
or until all of the ethanol has evaporated.  Caution: 
over-drying the beads may result in reduced yield. 
10.13  Remove the plate/tube(s) from the magnet. 
10.14  Thoroughly resuspend the beads in 50  μL of 
10  mM  Tris-HCl (pH  8.0  – 8.5). 
10.15  Incubate the plate/tube(s) at room temperature for 
2 min to elute DNA off the beads. 
SAFE STOPPING POINT 
The solution with resuspended beads can be 
stored at 4°C for ≤24  hrs. Do not freeze the 
beads, as this can result in dramatic loss of DNA. 
When ready, proceed to  2nd Post-ligation 
Cleanup  (step  11). 
11.  2nd Post-ligation Cleanup 
11.1  Perform a 0.7X bead-based cleanup by combining 
the following: 
Component  Volume 
Beads with purified, 
adapter-ligated DNA  50  μL 
PEG/NaCl Solution  35  μL 
Total volume:  85  μL 
11.2  Mix thoroughly by vortexing and/or pipetting up 
and down multiple times. 
11.3  Incubate the plate/tube(s) at room temperature for 
5 – 15  min to bind DNA to the beads. 
11.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
11.5  Carefully remove and discard 80  μL of supernatant. 
11.6  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
11.7  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
11.8  Carefully remove and discard the ethanol. 
11.9  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
11.10  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
11.11  Carefully remove and discard the ethanol. Try to 
remove all residual ethanol without disturbing 
the beads. 
11.12  Dry the beads at room temperature for 3  – 5 min, 
or until all of the ethanol has evaporated.  Caution: 
over-drying the beads may result in reduced yield. 
11.13  Remove the plate/tube(s) from the magnet. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  15 
11.14  Thoroughly resuspend the beads in 22  μL of 
10  mM  Tris-HCl (pH  8.0  – 8.5). 
11.15  Incubate the plate/tube(s) at room temperature for 
2 min to elute DNA off the beads. 
11.16  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
11.17  Transfer 20  μL of the clear supernatant to a new 
plate/tube(s) and proceed to  Library Amplification 
(step  12). 
SAFE STOPPING POINT 
The purified, adapter-ligated library DNA may 
be stored at 4°C for ≤1  week, or frozen at -20°C 
for ≤1  month. When ready, proceed to  Library 
Amplification  (step  12). 
12.  Library Amplification 
12.1  Assemble each library amplification reaction as 
follows: 
Component  Volume 
Purified, adapter-ligated DNA  20  μL 
Library amplification master mix 
(Table  8)  30  μL 
Total volume:  50  μL 
12.2  Mix well by pipetting up and down several times. 
12.3  Amplify the library using the following 
thermocycling profile: 
Step  Temp.  Duration  Cycles 
Initial 
denaturation  98°C  45 sec  1
Denaturation  98°C  15 sec 
Refer to 
Table 1 
Annealing*  60°C  30 sec 
Extension  72°C  30 sec 
Final extension  72°C  1 min  1
HOLD  4°C  ∞ 1
> *Optimization of the annealing temperature may be required for non-
> standard (i.e., other than Illumina TruSeq ®) adapter/primer combinations.
12.4  Proceed to  Library Amplification Cleanup 
(step  13). 
13.  Library Amplification Cleanup 
13.1  Perform a 1X bead-based cleanup by combining 
the following: 
Component  Volume 
Amplified library DNA  50  μL 
KAPA Pure Beads  50  μL 
Total volume:  100  μL 
13.2  Mix thoroughly by vortexing and/or pipetting up 
and down multiple times. 
13.3  Incubate the plate/tube(s) at room temperature for 
5 – 15  min to bind DNA to the beads. 
13.4  Place the plate/tube(s) on a magnet to capture the 
beads. Incubate until the liquid is clear. 
13.5  Carefully remove and discard 95  μL of supernatant. 
13.6  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
13.7  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
13.8  Carefully remove and discard the ethanol. 
13.9  Keeping the plate/tube(s) on the magnet, add 
200  μL of 80% ethanol. 
13.10  Incubate the plate/tube(s) on the magnet at room 
temperature for ≥30  sec. 
13.11  Carefully remove and discard the ethanol. Try to 
remove all residual ethanol without disturbing 
the beads. 
13.12  Dry the beads at room temperature for 3  – 5 min, 
or until all of the ethanol has evaporated.  Caution: 
over-drying the beads may result in reduced yield. 
13.13  Thoroughly resuspend the dried beads in 22  μL of 
10  mM  Tris-HCl (pH  8.0  – 8.5). 
13.14  Incubate the plate/tube(s) at room temperature for 
2 min to elute DNA off the beads. 
13.15  Place the plate/tube(s) on the magnet to capture 
the beads. Incubate until the liquid is clear. 
13.16  Transfer 20  μL of the clear supernatant to a new 
plate/tube(s), and store the purified, amplified 
libraries at 4°C (≤1 week), or at -20°C. Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 16  For Research Use Only. Not for use in diagnostic procedures. 
Appendix: Library Size Distribution 
Optimization 
The KAPA RNA HyperPrep Kit with RiboErase (HMR) 
offers a tunable RNA fragmentation module in which 
RNA is fragmented at a high temperature in the presence 
of magnesium. Final library size distributions can be 
optimized for specific sample types and applications by 
varying both incubation time and temperature. Generally: 
• higher temperatures and/or longer incubation times 
result in shorter, narrower distributions; and 
• lower temperatures and/or shorter incubation times 
result in longer, broader distributions. 
Fragmentation times may require adjustment based upon 
the quality of the input RNA. For intact RNA, such as that 
extracted from fresh/frozen tissue, longer fragmentation 
is required at higher temperatures. For degraded or 
fragmented RNA (e.g., from older samples or FFPE tissue), 
a lower temperature and/or shorter time should be used. 
Intact Total RNA Inputs 
When using high-quality, intact total RNA, the following 
recommendations can be used as a starting point for 
the optimization of final library distributions beyond what 
is provided within the  Library Construction Protocol .
It is recommended that a non-precious, representative 
RNA sample be used for this optimization. For the following 
figures and tables, final libraries were generated using the 
KAPA RNA HyperPrep Kit with RiboErase (HMR) and 100  ng 
of high-quality Universal Human Reference (UHR) RNA. 
The approximate mean and mode for the distributions 
shown in Figure  2 are summarized in Table  10. Figure  3
visually depicts these metrics for a sample library. 
Figure  1. High-quality UHR total RNA electropherogram prior 
to rRNA depletion and library construction 
RIN score was 7.6, with 96% of the RNA measuring >200 nucleotides, as assessed 
via an Agilent ® RNA 6000 Pico Kit.    
> 400 FU 4000 [nt] 2000 96% >200 nt 1000 500 200 25 300 200 100 0
> 96% >200 nt
> 10380 [bp] 400 200 100 35 050 100 150 200 250 300 500 2000 750 300 FU
> 85ºC for 6 min 94ºC for 4 min 94ºC for 6 min 94ºC for 8 min 94ºC for 2 min 85ºC for 6 min
Figure  2. Final library distributions demonstrating 
fragmentation tunability 
Higher temperatures and longer incubation times resulted in shorter, narrower final 
library distributions. Libraries were constructed using 100 ng of high-quality UHR 
RNA and various fragmentation conditions. Note that results may differ with other 
sample sources. Electropherograms were generated with an Agilent High Sensitivity 
DNA Kit.    
> 10380 [bp] 400 200 100 35 50 0100 150 200 250 300 500 2000 750 300 FU Mean: 410 bp Mode: 330 bp
Figure  3. Visual depiction of the mean and mode 
distribution metrics 
For a final library generated using 100 ng UHR fragmented at 95 °C for 4 minutes, 
the mode is the highest peak in the library (~330  bp), while the mean is the 
numerical average across all molecular lengths in the library (~410  bp). In this 
example, the mean of the library is calculated across the range of 190 to 1200  bp. 
The higher molecular weight shoulder of the distribution results in the mean being 
larger than the mode. 
Table 10. Approximate mean and mode final library sizes (bp) 
for each fragmentation condition assessed 
Fragmentation  Final library size (bp) 
Mean  Mode 
94°C for 8 min  ~330  ~290 
94°C for 6 min  ~360  ~300 
94°C for 4 min  ~410  ~330 
94°C for 2 min  ~520  ~390 
85°C for 6 min  ~460  ~390 
85°C for 4 min  ~520  ~390 Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  17 
Partially Degraded Total RNA Inputs 
When working with partially degraded (PD) inputs, the 
following recommendations may serve as a starting point 
for the optimization of final library distributions beyond 
what is provided within the  Library Construction Protocol .
It is recommended that a non-precious, representative 
RNA sample be used for optimization. For the following 
figures and tables, chemically degraded samples of 
UHR were used as substitutes for real-world partially 
degraded samples of varying qualities. This RNA was 
ribosomally-depleted using the KAPA RiboErase (HMR) 
RNA enrichment module, processed with the KAPA RNA 
HyperPrep workflow, and subjected to a fragmentation 
condition titration. 
Fragmentation 
Higher-quality Partially 
Degraded Final Libary Size 
Moderate-quality Partially 
Degraded Final Libary Size 
Lower-quality Partially 
Degraded Final Libary Size 
Mean (bp)  Mode (bp)  Mean (bp)  Mode (bp)  Mean (bp)  Mode (bp) 
94°C for 8  min  ~320  ~280  ~310  ~270  ~310  ~280 
94°C for 6  min  ~350  ~300  ~340  ~300  ~330  ~290 
94°C for 4  min  ~380  ~330  ~380  ~310  ~360  ~310 
85°C for 6  min  ~420  ~390  ~410  ~330  ~390  ~330 
85°C for 4  min  ~450  ~390  ~450  ~390  ~410  ~360 
Figure  4. Input RNA and final library distributions for a range of partially degraded sample qualities 
Libraries were constructed using 100 ng of chemically-degraded UHR RNA to target various qualities of partially degraded inputs, including higher-quality ( A), moderate-
quality ( B), and lower-quality ( C). As expected, the two commonly used RNA quality metrics, RIN and Dv200, decrease as RNA quality decreases. For all RNA qualities 
assessed, increased fragmentation time and/or temperature resulted in shorter, narrower distributions. Note that results may differ with other sample sources. Total RNA 
electropherograms were generated with an Agilent ® RNA 6000 Pico Kit, and final library electropherograms were generated with a an Agilent High Sensitivity DNA Kit.       
> 40 FU 4000 [nt] 2000 1000 500 200 25 30 20 10 050 60
> 92% >200 nt RIN: 2.5 Dv200: 92%
> FU 10380 [bp] 2000 500 200 100 200 50 0100 150 250 300 750 400 300 35
> 85ºC for 4 min 85ºC for 6 min 94ºC for 4 min 94ºC for 6 min 94ºC for 8 min
> 40 FU 4000 [nt] 2000 1000 500 200 25 30 20 10 050 60
> 87% >200 nt RIN: 2.2 Dv200: 87%
> FU 10380 2000 500 200 100 200 50 0100 150 250 300 750 400 300 35 [bp]
> 85ºC for 4 min 85ºC for 6 min 94ºC for 4 min 94ºC for 6 min 94ºC for 8 min
> 40 FU 4000 [nt] 2000 1000 500 200 25 30 20 10 050 60 70 80
> 79% >200 nt RIN: 1.5 Dv200: 79%
> FU 10380 2000 500 200 100 200 50 0100 150 250 750 400 300 35 [bp]
> 85ºC for 4 min 85ºC for 6 min 94ºC for 4 min 94ºC for 6 min 94ºC for 8 min
> Lower-quality
> Partially Degraded
> Moderate-quality
> Partially Degraded
> Higher-quality
> Partially Degraded
Total RNA Inputs  Final Libraries 
A
B
CTechnical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 18  For Research Use Only. Not for use in diagnostic procedures. 
The effects of total RNA quality on final library distributions 
are illustrated in Figure 5, and summarized below by 
fragmentation condition: 
• 94 °C for 8 min: Final library distributions were not overly 
impacted by input RNA quality, but a correlation between 
lower quality and reduced final library yield was apparent. 
• 94 °C for 4 min: While final library distribution modes were not 
overly impacted by input RNA quality, distributions became 
narrower, resulting in lower mean values, as RNA quality 
decreased. 
• 85 °C for 4 min: Both the mode and mean final library 
distribution metrics were impacted by RNA input quality, 
with both metrics decreasing as input quality decreased. 
Final library yield was not overly impacted until input quality 
dropped sufficiently low. 
Figure  5. Assessment of the effects of total RNA quality on final 
library distributions 
Fragmentation conditions were selected to target a range of final library sizes: 94°C for 
8 min ( A), 94°C for 4  min ( B), and 85°C for 4  min ( C). Libraries were constructed using 
100 ng of either intact or chemically degraded UHR RNA. Results may differ with other 
sample sources. Electropherograms were generated with an Agilent ® High Sensitivity 
DNA Kit. 
> FU [bp]
200 50 0100 150 250 10380 2000 500 200 100 750 400 300 35 
High-quality UHR Higher-quality PD Moderate-quality PD Lower-quality PD 
A
> FU [bp]
200 50 0100 150 250 300 10380 2000 500 200 100 750 400 300 35 
High-quality UHR Higher-quality PD Moderate-quality PD Lower-quality PD 
C
> FU [bp]
200 50 0100 150 250 300 10380 2000 500 200 100 750 400 300 35 
High-quality UHR Higher-quality PD Moderate-quality PD Lower-quality PD 
BTechnical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms For Research Use Only. Not for use in diagnostic procedures.  19 
FFPE-derived Total RNA Inputs 
When working with FFPE-derived total RNA inputs, 
fragmentation at 65°C for 1 min is recommended. 
In the following figures and table, final libraries 
were generated using two FFPE-derived samples, 
one of higher-quality and one of lower-quality. Total 
RNA was ribosomally-depleted using the KAPA 
RiboErase (HMR) RNA enrichment module and then 
processed with the KAPA RNA HyperPrep workflow. 
It should be noted that variable qualities of FFPE-
derived samples can impact both final library size 
distributions and the amount of adapter-dimer carryover. 
In the case of elevated amounts of residual adapter-
dimer, perform a second post-amplification 1X KAPA 
Pure Beads cleanup. Adapter-dimer carryover can be 
prevented in future library preparations by reducing 
the adapter concentration in the ligation reaction. 
Table  11. Approximate final mean and mode library sizes, in bp, 
and adapter-dimer carryover rate for higher- and lower-quality 
FFPE samples. 
Sample 
Final library 
size (bp)  Adapter-dimer 
(Molar %) 
Mean  Mode 
Thyroid 
(higher-quality)  ~350  ~310  0.8 
Duodenum 
(lower-quality)  ~300  ~280  14.2 
> FU
80 020 40 100 120 140 160 60 10380 [bp] 400 200 100 35 500 2000 750 300 
Thyroid (higher-quality) Duodenum (lower-quality) 
Figure  7. Final libraries resulting from FFPE-derived RNA inputs 
The lower-quality FFPE input showed a slightly smaller size distribution and a 
higher prevalence of adapter-dimer in comparison to the higher-quality FFPE input. 
Libraries were constructed using 100 ng of total RNA fragmented at 65°C for 1 
minute. Electropherograms were generated with an Agilent High Sensitivity DNA Kit.   
> 400 200 100 150 300
> Thyroid (higher-quality) Duodenum (lower-quality)
Figure  6. Electropherograms for total RNA inputs derived from 
thyroid and duodenum FFPE samples 
The high-quality thyroid sample had a RIN score of 2.2, with 47% of the RNA 
measuring >200  nucleotides. The lower-quality duodenum sample had a RIN score 
of 2.5, with 29% of the RNA measuring >200  nucleotides. Both quality metrics were 
assessed via an Agilent ® RNA 6000 Pico Kit.  
> 40 FU 4000 [nt] 2000 1000 500 200 25 30 20 10 0
> Thyroid (higher-quality) Duodenum (lower-quality)
# Technical Data Sheet 
# KAPA RNA HyperPrep Kit with RiboErase (HMR) 
# Illumina ® Platforms 20  For Research Use Only. Not for use in diagnostic procedures. Pubished by: 
> Roche Sequencing Solutions
> 4300 Hacienda Drive
> Pleasanton, CA 94588
> www.kapabiosystems.com
> © 2016 Roche Sequencing Solutions, Inc. KAPA and SeqCap are trademarks of Roche. All trademarks are the property of their respective owners.
Restrictions and Liabilities 
This technical data sheet is provided “as is” 
and Kapa Biosystems assumes no responsibility for 
any typographical, technical, or other inaccuracies. 
The document is subject to change, without notice, in 
future editions. 
To the maximum extent permitted by applicable law, Kapa 
Biosystems disclaims all warranties, either express or 
implied, with regard to this technical data sheet and any 
information contained herein, including but not limited to 
the implied warranties of merchantability and fitness for 
a particular purpose. Kapa Biosystems shall not be liable 
for errors or for incidental or consequential damages in 
connection with the furnishing, use, or performance of this 
document or of any information contained herein. 
This document might contain references to third party 
sources of information, hardware or software, products, 
or services and/or third party web sites (collectively 
the “Third-Party Information”). Kapa Biosystems does 
not control, and is not responsible for, any Third-Party 
Information. The inclusion of Third-Party Information 
in this document does not imply endorsement by Kapa 
Biosystems of the Third-Party Information or the third 
party in any way. 
Kapa Biosystems is not responsible nor will be liable in 
any way for your use of any software or equipment that is 
not supplied by Kapa Biosystems in connection with your 
use of Kapa Biosystems products. 
Kapa Biosystems does not in any way guarantee or 
represent that you will obtain satisfactory results from 
using Kapa Biosystems products as described herein. The 
only warranties provided to you are included in the Limited 
Warranty enclosed with this document. You assume all risk 
in connection with your use of Kapa Biosystems products. 
Note to Purchaser: Limited Product Warranty 
Any product that does not meet the performance 
standards stated in the product specification sheet will be 
replaced at no charge. This warranty limits our liability to 
the replacement of the product. No other warranties of 
any kind, express or implied, including without limitation, 
implied warranties of merchantability or fitness for a
particular purpose, are provided by Kapa Biosystems. 
Kapa Biosystems shall have no liability for any direct, 
indirect, consequential or incidental damages arising out 
of the use, the results of use or the inability to use any 
product. 
Note to Purchaser: Limited License 
KAPA RNA HyperPrep Kits with RiboErase (HMR) are 
developed, designed and sold exclusively for research 
purposes and  in vitro  use. Neither the product, nor 
any individual component, has been tested for use in 
diagnostics or for drug development, nor is it suitable for 
administration to humans or animals. Please refer to the 
SDS, which is available on request. 
Certain applications of this product are covered by patents 
issued to parties other than Kapa Biosystems and applicable in 
certain countries. Purchase of this product does not include a 
license to perform any such applications. Users of this product 
may therefore be required to obtain a patent license depending 
upon the particular application and country in which the product 
is used. 
Licensed under U.S. Patent nos. 5,338,671 and 5,587,287 and 
corresponding patents in other countries.