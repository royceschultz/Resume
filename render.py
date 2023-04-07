import subprocess
import hashlib
import sys

mode = None
if len(sys.argv) > 1:
    mode = sys.argv[1]
    if mode not in {'dev'}:
        print('Unknown mode:', mode)
        exit()

def run(cmd):
    res = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if res.returncode != 0:
        print("❌ Error running command:", cmd)
        raise Exception(res.stderr)
    return res.stdout.decode('utf-8')

# Check if any uncommitted changes
git_status = run('git status --porcelain')
uncommitted_changes = []
for line in git_status.splitlines():
    if line.startswith('??'):
        continue
    uncommitted_changes.append(line)

if uncommitted_changes and mode != 'dev':
    print('⚠️ Uncommitted changes:')
    for line in uncommitted_changes:
        print(line)

    print('Continue? (y/n)')
    res = input()
    while True:
        if res == 'y':
            break
        elif res == 'n':
            print('Aborting')
            exit()
        print('Continue? (y/n)')
        res = input()

print('🚀 Building...')
run('npm run build')
print('🏃 Running...')
run('npm run index')

if mode == 'dev':
    run('open build/index.pdf')
    exit()

current_branch = run('git rev-parse --abbrev-ref HEAD').strip()
print('current_branch', current_branch)

# branch_hash = run('git rev-parse --short HEAD').strip()
branch_hash = hashlib.sha256(current_branch.encode('utf-8')).hexdigest()
print('branch_hash', branch_hash)
branch_hash = f'1{current_branch[:2]}{branch_hash[:5]}'
print('modified hash', branch_hash)

print('📄 Copying files...')
index_pdf = 'build/index.pdf'
render_folder = 'renders'
hashed_folder = f'{render_folder}/hashed'
# Copy index.pdf to a file with the branch name
run(f'cp {index_pdf} {render_folder}/Royce_Schultz_Resume_{current_branch}.pdf')
# Copy index.pdf to a file with the branch hash
run(f'cp {index_pdf} {hashed_folder}/Royce_Schultz_Resume_{branch_hash}.pdf')

print('🖼️ Converting to png...')
# Convert pdf to png for github preview.
run(f'convert -density 250 {index_pdf} -background White -flatten -quality 90 {render_folder}/img/Royce_Schultz_Resume_{current_branch}.png')

if current_branch in {'master', 'staging'}:
    # Copy index.pdf to a file with the branch name
    run(f'cp build/index.pdf Royce_Schultz_Resume.pdf')
    run(f'convert -density 250 Royce_Schultz_Resume.pdf -background White -flatten -quality 90 Royce_Schultz_Resume.png')

print('✨ Done!')
